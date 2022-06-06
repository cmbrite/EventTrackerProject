package com.skilldistillery.studytracker;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;

@SpringBootApplication
public class StudyTrackerRestApplication extends SpringBootServletInitializer {
	  @Override
	  protected SpringApplicationBuilder configure(SpringApplicationBuilder application) {
	    return application.sources(StudyTrackerRestApplication.class);
	  }

	public static void main(String[] args) {
		SpringApplication.run(StudyTrackerRestApplication.class, args);
	}

}
