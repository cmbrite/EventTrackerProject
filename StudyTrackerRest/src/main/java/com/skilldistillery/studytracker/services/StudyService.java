package com.skilldistillery.studytracker.services;

import java.util.List;

import com.skilldistillery.studytracker.entities.Study;

public interface StudyService {
	List<Study> index();
	Study findById(Integer id);
	Study createStudySession(Study study);
	Study updateStudySession(Study study, Integer id);
	Boolean deleteStudySession(Integer id);
}
