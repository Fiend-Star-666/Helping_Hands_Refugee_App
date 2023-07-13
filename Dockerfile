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

# Start with a base image containing Java runtime and MySQL
FROM mysql:8.0.26

# Configure debconf to make the MySQL installation non-interactive
RUN echo 'mysql-server mysql-server/root_password password 1234' | debconf-set-selections
RUN echo 'mysql-server mysql-server/root_password_again password 1234' | debconf-set-selections

# Set the working directory in the container
WORKDIR /app

# Copy the backend application to the container
COPY --from=builder /app/ /app/Back-end/
COPY --from=builder /app/target/athena-0.0.1-SNAPSHOT.jar ./Back-end/athena/target/athena-0.0.1-SNAPSHOT.jar
COPY --from=builder /app/start-backend.sh ./start-backend.sh

# Set the permissions for the start-backend.sh file
RUN chmod +x ./start-backend.sh

# Copy the frontend application to the container
COPY --from=frontend-builder /app/ /app/Front-end

# Make port 3001 available to the world outside this container
EXPOSE 3001
EXPOSE 9091

# Copy Supervisor config file
COPY supervisord.conf /etc/supervisor/conf.d/supervisord.conf


# Run the following commands to add the GPG key for the MySQL repository
RUN apt-key adv --keyserver keyserver.ubuntu.com --recv-keys 467B942D3A79BD29
RUN echo "deb http://repo.mysql.com/apt/debian/ buster mysql-8.0" > /etc/apt/sources.list.d/mysql.list

# Update package lists and install curl
RUN apt-get update && apt-get install -y curl
RUN curl -sL https://deb.nodesource.com/setup_14.x | bash -
RUN apt-get install -y nodejs

USER root

ENV MYSQL_ROOT_PASSWORD=1234

RUN ls -al

# Inline script to wait for MySQL service and execute SQL query
RUN (/usr/local/bin/docker-entrypoint.sh mysqld > /dev/null &) \
    && until mysqladmin ping -h "localhost" --silent; do \
      echo "Waiting for MySQL to start..."; \
      sleep 4; \
    done \
    && echo "MySQL is up - executing command" \
    && mysql -uroot -p1234 -e "CREATE DATABASE IF NOT EXISTS refugeeApp;"

# Run the applications using Supervisor
CMD ["/usr/bin/supervisord"]
