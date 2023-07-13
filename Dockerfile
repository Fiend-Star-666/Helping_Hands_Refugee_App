# Start with a base image containing Java runtime and Maven
FROM maven:3.8.3-openjdk-17 as builder

# Set the working directory in the builder
WORKDIR /app

# Copy the pom.xml file to download dependencies
COPY ./Back-end/athena/pom.xml ./

# Download the dependencies
RUN mvn dependency:go-offline -B

# Copy the backend source code to the builder
COPY ./Back-end/athena .

# Copy the start-backend.sh file to the builder
COPY ./start-backend.sh .

# Build the backend application
RUN mvn package

# Start with a base image containing Node.js runtime
FROM node:14 as frontend-builder

# Set the working directory in the frontend
WORKDIR /app

# Copy the frontend source code to the frontend
COPY ./Front-end .

COPY ./Front-end/package*.json ./

# Install app dependencies
RUN npm install

# Build the frontend application
RUN npm run build

# We start from the MySQL 8.0.26 image
FROM mysql:8.0.26

# Make directories and change ownership
RUN mkdir -p /var/run/mysqld && chown -R mysql:mysql /var/run/mysqld

# Set the working directory
WORKDIR /app

# Copy the backend application to the container
COPY --from=builder /app/ /app/Back-end/
COPY --from=builder /app/target/athena-0.0.1-SNAPSHOT.jar ./Back-end/athena/target/athena-0.0.1-SNAPSHOT.jar
COPY --from=builder /app/start-backend.sh ./start-backend.sh

# Set the permissions for the start-backend.sh file
RUN chmod +x ./start-backend.sh

# Copy the frontend application to the container
COPY --from=frontend-builder /app/ /app/Front-end

# Make ports available to the world outside this container
EXPOSE 3001
EXPOSE 9091

# Copy Supervisor config files
COPY supervisord.conf /etc/supervisor/conf.d/supervisord.conf
COPY supervisord.conf /app
COPY supervisord.conf /usr/bin/supervisord.conf

# Add the GPG key for the MySQL repository
RUN apt-key adv --keyserver keyserver.ubuntu.com --recv-keys 467B942D3A79BD29
RUN echo "deb http://repo.mysql.com/apt/debian/ buster mysql-8.0" > /etc/apt/sources.list.d/mysql.list

# Update package lists and install curl, supervisor, Node.js, Maven, OpenJDK 17, and MySQL
RUN apt-get update && apt-get install -y curl supervisor
RUN curl -sL https://deb.nodesource.com/setup_14.x | bash -
RUN apt-get install -y nodejs
RUN apt-get install -y maven
RUN apt-get install -y openjdk-17-jdk openjdk-17-jre
RUN apt-get install -y mysql-server mysql-client

RUN service mysql start && \
    until mysqladmin ping -h "localhost" --silent; do \
      echo "Waiting for MySQL to start..."; \
      sleep 4; \
    done \
    && echo "MySQL is up - executing command" \
    && mysql -uroot -p1234 -e "CREATE DATABASE IF NOT EXISTS refugeeApp;"

# Set working directories and list files
WORKDIR /usr/local/bin
RUN ls -al
WORKDIR /app
RUN ls -al

# Run the applications using Supervisor
CMD ["/usr/bin/supervisord"]
