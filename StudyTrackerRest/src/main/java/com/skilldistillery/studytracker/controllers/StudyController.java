package com.skilldistillery.studytracker.controllers;

import java.util.List;

import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.skilldistillery.studytracker.entities.Study;
import com.skilldistillery.studytracker.services.StudyService;

@RequestMapping("api")
@RestController
@CrossOrigin({ "*", "http://localhost" })
public class StudyController {
	@Autowired
	private StudyService studyServ;

	@GetMapping("studies")
	public List<Study> index() {
		return studyServ.index();
	}

	@GetMapping("studies/{id}")
	public Study findStudy(@PathVariable Integer id, HttpServletResponse resp) {
		Study study = studyServ.findById(id);
		if (study == null) {
			resp.setStatus(404);
		}
		return study;
	}

	@PostMapping("studies")
	public Study createStudySession(@RequestBody Study study, HttpServletResponse resp) {
		Study newStudy = null;
		try {
			newStudy = studyServ.createStudySession(study);
			resp.setStatus(201);
		} catch (Exception e) {
			e.printStackTrace();
			resp.setStatus(400);
		}
		return newStudy;
	}

	@PutMapping("studies/{id}")
	public Study update(@RequestBody Study study, @PathVariable Integer id, HttpServletResponse resp) {
		Study updated = null;

		try {
			updated = studyServ.updateStudySession(study, id);
			resp.setStatus(200);
		} catch (Exception e) {
			e.printStackTrace();
			resp.setStatus(400);
		}

		return updated;
	}

	@DeleteMapping("studies/{id}")
	public Boolean delete(@PathVariable Integer id, HttpServletResponse resp) {
		Boolean deleted = false;
		try {
			deleted = studyServ.deleteStudySession(id);
			if (deleted) {
				resp.setStatus(204);
			} else {
				resp.setStatus(404);
			}
		} catch (Exception e) {
			resp.setStatus(500);
		}
		return deleted;
	}
}
