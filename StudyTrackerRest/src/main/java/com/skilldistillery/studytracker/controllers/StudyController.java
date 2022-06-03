package com.skilldistillery.studytracker.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.skilldistillery.studytracker.entities.Study;
import com.skilldistillery.studytracker.services.StudyService;

@RequestMapping("api")
@RestController
public class StudyController {
	@Autowired
	private StudyService studyServ;
	
	
	@GetMapping("studies")
	public List<Study> index(){
		return studyServ.index();
	}

}
