package com.cognizant.slf4jexercise1;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class Slf4jExercise1Application {

	public static void main(String[] args) {

		SpringApplication.run(Slf4jExercise1Application.class, args);

		LoggingExample loggingExample = new LoggingExample();

		loggingExample.printLogs();

	}

}