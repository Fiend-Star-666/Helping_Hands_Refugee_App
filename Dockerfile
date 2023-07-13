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

# Build the backend application
RUN mvn package

# Start with a base image containing Node.js runtime
FROM node:16 as frontend-builder

# Set the working directory in the frontend
WORKDIR /app

# Copy the package*.json and install dependencies first for leveraging Docker build cache
COPY ./Front-end/package*.json ./
RUN npm install

# Copy the rest of the frontend source code
COPY ./Front-end .

# Build the frontend application
RUN npm run build

FROM eclipse-temurin:17 as final

# Set the working directory
WORKDIR /app

# Copy the backend and frontend applications to the container
COPY --from=builder /app/ ./Back-end/
COPY --from=frontend-builder /app/build ./Front-end/

# Update package lists, install supervisor, Node.js, and clean up the cache
# Install OpenJDK-17, supervisor
RUN apt-get update && apt-get install -y supervisor curl && rm -rf /var/lib/apt/lists/*

# Install Node.js v14 and npm
RUN curl -fsSL https://deb.nodesource.com/setup_lts.x | bash -
RUN apt-get install -y nodejs


RUN npm install -g serve
#&& rm -rf /var/lib/apt/lists/*

EXPOSE 3001
#EXPOSE 9091

# Run the applications using Supervisor
CMD ["/usr/bin/supervisord"]
