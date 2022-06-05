package com.skilldistillery.studytracker.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.skilldistillery.studytracker.entities.Study;
import com.skilldistillery.studytracker.repositories.StudyRepository;

@Service
public class StudyServiceImpl implements StudyService{

	@Autowired
	private StudyRepository studyRepo;
	
	@Override
	public List<Study> index() {
		return studyRepo.findAll();
	}
	
	@Override
	public Study findById(int id) {
		Optional<Study> op = studyRepo.findById(id);
		if(op.isPresent()) {
			Study study = op.get();
			return study;
		}
		return null;
	}

	@Override
	public Study createStudySession(Study study) {
		return studyRepo.saveAndFlush(study);
	}

	@Override
	public Study updateStudySession(Study study, int id) {
		Study existingSession = findById(id);
		existingSession.setSubject(study.getSubject());
		existingSession.setSubSection(study.getSubSection());
		existingSession.setStudyDuration(study.getStudyDuration());
		existingSession.setLocation(study.getLocation());
		existingSession.setDate(study.getDate());
		return studyRepo.save(existingSession);
	}

	@Override
	public Boolean deleteStudySession(int id) {
		studyRepo.deleteById(id);
		return !studyRepo.existsById(id);
	}
	
	

}
