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
RUN chmod +x ./start-backend.sh

# Build the backend application
RUN mvn package -DskipTests

# Start with a base image containing Node.js runtime
FROM node:14 as frontend-builder

# Set the working directory in the frontend
WORKDIR /app

# Copy the frontend source code to the frontend
COPY ./Front-end .

RUN ls -al

# Install app dependencies
RUN npm install

# Build the frontend application
RUN npm run build

RUN ls -al
#
#WORKDIR /app
#
#RUN ls -al
#
#COPY /build ./Front-end


# Start with a base image containing Java runtime
FROM eclipse-temurin:17 as final

# Install MySQL client, MySQL Server and Supervisor
RUN apt-get update && apt-get install -y mysql-client mysql-server supervisor

# Setup MySQL
RUN if [ ! -d /run/mysqld ]; then mkdir /run/mysqld; fi && \
    chown -R mysql:mysql /run/mysqld && \
    echo "mysql:mysql:1234" | chpasswd



# Set the working directory in the container
WORKDIR /app

# Copy the backend application to the container
# If the Maven build happened in an earlier step in the same Dockerfile:
COPY --from=builder /app/target/athena-0.0.1-SNAPSHOT.jar ./Back-end/athena/target/athena-0.0.1-SNAPSHOT.jar

# Copy the frontend application to the container
WORKDIR /app

RUN ls -al

# Copy the built frontend application from the frontend-builder stage
#COPY --from=frontend-builder /app/Front-end/build ./Front-end

# Make port 9091 and 3000 available to the world outside this container
EXPOSE 9091 3000

# Copy Supervisor config file
COPY supervisord.conf /etc/supervisor/conf.d/supervisord.conf

# Run the applications using Supervisor
CMD ["/usr/bin/supervisord"]
