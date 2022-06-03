package com.skilldistillery.studytracker.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.skilldistillery.studytracker.entities.Study;

public interface StudyRepository extends JpaRepository<Study, Integer> {

}
