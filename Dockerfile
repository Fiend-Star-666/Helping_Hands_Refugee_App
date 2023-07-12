# Start with a base image containing Java runtime and Maven
FROM maven:3.6.3-openjdk-8 as builder

# Set the working directory in the builder
WORKDIR /app

# Copy the pom.xml file to download dependencies
COPY ./Back-end/athena/pom.xml ./

# Download the dependencies
RUN mvn dependency:go-offline -B

# Copy the backend source code to the builder
COPY ./Back-end/athena .

# Build the backend application
RUN mvn package

# Start with a base image containing Node.js runtime
FROM node:14 as frontend

# Set the working directory in the frontend
WORKDIR /app

# Copy the frontend source code to the frontend
COPY ./frontend .

# Install app dependencies
RUN npm install

# Build the frontend application
RUN npm run build

# Start with a base image containing MySQL
FROM mysql:5.7 as db

# Set the MySQL root password
ENV MYSQL_ROOT_PASSWORD=1234

# Create a database
RUN /etc/init.d/mysql start && \
    mysql -u root -p$MYSQL_ROOT_PASSWORD -e "CREATE DATABASE refugeeApp;"

# Start with a base image containing Java runtime
FROM openjdk:8-jdk-alpine

# Set the working directory in the container
WORKDIR /app

# Copy the backend application to the container
COPY --from=builder /app/target/*.jar ./backend.jar

# Copy the frontend application to the container
COPY --from=frontend /app/build ./frontend

# Make port 9091 available to the world outside this container
EXPOSE 9091

# Run the backend application
CMD ["java","-Djava.security.egd=file:/dev/./urandom","-jar","./backend.jar"]
