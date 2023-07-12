#!/bin/sh

# Function to check MySQL availability
wait_for_mysql() {
    echo "Checking MySQL connection..."
    while ! mysqladmin ping -h localhost -P 3306 -u root -p1234 --silent; do
        sleep 3
    done
    echo "MySQL is up and running!"
}

# Check MySQL availability
wait_for_mysql

# Start the Spring Boot application
java -Djava.security.egd=file:/dev/./urandom -jar ./Back-end/athena/target/athena-0.0.1-SNAPSHOT.jar
