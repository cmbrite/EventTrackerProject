package com.skilldistillery.studytracker.entities;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;

import org.junit.jupiter.api.AfterAll;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

class StudyTest {
	
	private static EntityManagerFactory emf;
	private EntityManager em;
	private Study study;

	@BeforeAll
	static void setUpBeforeClass() throws Exception {
		emf = Persistence.createEntityManagerFactory("StudyTrackerJPA");
	}

	@AfterAll
	static void tearDownAfterClass() throws Exception {
		emf.close();
	}

	@BeforeEach
	void setUp() throws Exception {
		em = emf.createEntityManager();
		study = em.find(Study.class, 1);
	}

	@AfterEach
	void tearDown() throws Exception {
		em.close();
		study = null;
	}

	@Test
	@DisplayName("Basic study mapping tests")
	void test() {
		assertNotNull(study);
		assertEquals("Java", study.getSubject());
		assertEquals("JPA", study.getSubSection());
		assertEquals(60, study.getStudyDuration());
		assertEquals("Home", study.getLocation());
		assertEquals(2022, study.getDate().getYear());
		assertEquals(06, study.getDate().getMonthValue());
		assertEquals(02, study.getDate().getDayOfMonth());
			
								
	}


}
