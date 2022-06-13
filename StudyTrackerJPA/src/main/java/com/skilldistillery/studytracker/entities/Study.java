package com.skilldistillery.studytracker.entities;

import java.time.LocalDate;
import java.util.Objects;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Study {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	
	private String subject;
	
	@Column(name="subject_section")
	private String subSection;
	
	@Column(name="duration")
	private Integer studyDuration;
	
	private String location;
	
	private LocalDate date;

	public Study() {
		super();
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getSubject() {
		return subject;
	}

	public void setSubject(String subject) {
		this.subject = subject;
	}

	public String getSubSection() {
		return subSection;
	}

	public void setSubSection(String subSection) {
		this.subSection = subSection;
	}

	public Integer getStudyDuration() {
		return studyDuration;
	}

	public void setStudyDuration(Integer studyDuration) {
		this.studyDuration = studyDuration;
	}

	public String getLocation() {
		return location;
	}

	public void setLocation(String location) {
		this.location = location;
	}

	public LocalDate getDate() {
		return date;
	}

	public void setDate(LocalDate date) {
		this.date = date;
	}

	@Override
	public String toString() {
		return "Study [id=" + id + ", subject=" + subject + ", subSection=" + subSection + ", studyDuration="
				+ studyDuration + ", location=" + location + ", date=" + date + "]";
	}

	@Override
	public int hashCode() {
		return Objects.hash(id);
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Study other = (Study) obj;
		return id == other.id;
	}

	
	
}