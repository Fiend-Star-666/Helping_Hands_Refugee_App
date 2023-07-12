# Start with a base image containing Java runtime and Maven
FROM eclipse-temurin:17 as builder

# Install Maven
RUN apt-get update && apt-get install -y maven

# Set the working directory in the builder
WORKDIR /app

# Copy the pom.xml file to download dependencies
COPY ./Back-end/athena/pom.xml ./

# Download the dependencies
RUN mvn dependency:go-offline -B

# Copy the backend source code to the builder
COPY ./Back-end/athena .

# Copy the start-backend.sh file to the builder
COPY ./start-backend.sh ./start-backend.sh

# Build the backend application
RUN mvn package

RUN ls -al

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

RUN echo "Contents of /app directory:" && ls -al /app

# Start with a base image containing Java runtime
FROM eclipse-temurin:17 as final

# Configure debconf to make the MySQL installation non-interactive
RUN echo 'mysql-server mysql-server/root_password_again password 1234' | debconf-set-selections

RUN apt-get update && apt-get upgrade -y

# Install MySQL Server 5.7 or 5.8
RUN apt-get install -y mysql-server-5.7 mysql-client supervisor
# OR
# RUN apt-get install -y mysql-server-5.8 mysql-client supervisor

# Setup MySQL
RUN mkdir -p /var/run/mysqld && \
    chown -R mysql:mysql /var/run/mysqld && \
    echo "default_authentication_plugin = caching_sha2_password" >> /etc/mysql/mysql.conf.d/mysqld.cnf && \
    service mysql start && \
    while ! mysqladmin ping -uroot -p1234 --silent; do \
        sleep 1; \
        echo "Waiting for MySQL to be ready..."; \
    done && \
    mysql -uroot -p1234 -e "CREATE DATABASE refugeeApp;"

# Set the working directory in the container
WORKDIR /app

# Copy the backend application to the container
COPY --from=builder /app/ /app/Back-end/
COPY --from=builder /app/target/athena-0.0.1-SNAPSHOT.jar ./Back-end/athena/target/athena-0.0.1-SNAPSHOT.jar
COPY --from=builder /app/start-backend.sh ./start-backend.sh

RUN chmod +x ./start-backend.sh

# Copy the frontend application to the container
COPY --from=frontend-builder /app/ /app/Front-end

RUN echo "Contents of /app directory:" && ls -al /app

# Make port 3001 available to the world outside this container
EXPOSE 3001
EXPOSE 9091

# Copy Supervisor config file
COPY supervisord.conf /etc/supervisor/conf.d/supervisord.conf

RUN curl -sL https://deb.nodesource.com/setup_14.x | bash -
RUN apt-get install -y nodejs

RUN echo "Contents of /app directory:" && ls -al /app

# Run the applications using Supervisor
CMD ["/usr/bin/supervisord"]
