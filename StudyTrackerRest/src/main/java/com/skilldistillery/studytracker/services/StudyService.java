package com.skilldistillery.studytracker.services;

import java.util.List;

import com.skilldistillery.studytracker.entities.Study;

public interface StudyService {
	List<Study> index();
	Study findById(int id);
	Study createStudySession(Study study);
	Study updateStudySession(Study study, int id);
	Boolean deleteStudySession(int id);
}
