#!/bin/sh

# function to check MySQL availability
wait_for_mysql() {
    echo "Checking MySQL connection..."
    while ! mysqladmin ping -h"mysql" --silent; do
        sleep 1
    done
    echo "MySQL is up and running!"
}

# check MySQL availability
wait_for_mysql

# start the Spring Boot application
java -Djava.security.egd=file:/dev/./urandom -jar ./Back-end/athena/target/athena-0.0.1-SNAPSHOT.jar
