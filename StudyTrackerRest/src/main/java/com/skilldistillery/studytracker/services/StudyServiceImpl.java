package com.skilldistillery.studytracker.services;

import java.util.List;

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

}
