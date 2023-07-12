#!/bin/sh

# Function to check PostgreSQL availability
wait_for_postgres() {
    echo "Checking PostgreSQL connection..."
    while ! pg_isready -h localhost -p 5432 -U root -d refugeeApp >/dev/null 2>&1; do
        sleep 3
    done
    echo "PostgreSQL is up and running!"
}

# Check PostgreSQL availability
wait_for_postgres

# Start the Spring Boot application
java -Djava.security.egd=file:/dev/./urandom -jar ./Back-end/athena/target/athena-0.0.1-SNAPSHOT.jar
