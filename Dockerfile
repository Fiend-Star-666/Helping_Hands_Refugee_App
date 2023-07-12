# Start with a base image containing Java runtime
FROM openjdk:17-jdk as maven-builder

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

# Build the backend application
RUN mvn package

# Start with a base image containing Node.js runtime
FROM node:14 as frontend-builder

# Set the working directory in the frontend
WORKDIR /app

# Copy the frontend source code to the frontend
COPY ./Front-end .

# Install app dependencies
RUN npm install

# Build the frontend application
RUN npm run build

# Start with a base image containing Java runtime and MySQL
FROM openjdk:17-jdk-alpine

# Install MySQL Server
RUN apk add --no-cache mysql mysql-client && \
    mkdir /run/mysqld && \
    chown -R mysql:mysql /run/mysqld && \
    mysql_install_db --user=mysql --ldata=/var/lib/mysql

# Set the working directory in the container
WORKDIR /app

# Copy the backend application to the container
COPY --from=maven-builder /app/target/athena-0.0.1-SNAPSHOT.jar ./Back-end.jar

# Copy the frontend application to the container
COPY --from=frontend-builder /app/build ./Front-end

# Make port 9091 available to the world outside this container
EXPOSE 9091

# Set environment variables
ENV SPRING_DATASOURCE_URL=jdbc:mysql://localhost:3306/refugeeApp
ENV SPRING_DATASOURCE_USERNAME=root
ENV SPRING_DATASOURCE_PASSWORD=1234
ENV SERVER_PORT=9091
ENV SPRING_JPA_PROPERTIES_HIBERNATE_DIALECT=org.hibernate.dialect.MySQL5InnoDBDialect
ENV SPRING_JPA_HIBERNATE_DDL_AUTO=update

# Run the backend application
CMD ["java","-Djava.security.egd=file:/dev/./urandom","-jar","./Back-end.jar"]
