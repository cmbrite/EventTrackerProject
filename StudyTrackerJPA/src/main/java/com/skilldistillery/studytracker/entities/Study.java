package com.skilldistillery.studytracker.entities;

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
	
	@Column(name="duration")
	private int studyDuration;

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

	public int getStudyDuration() {
		return studyDuration;
	}

	public void setStudyDuration(int studyDuration) {
		this.studyDuration = studyDuration;
	}

	@Override
	public String toString() {
		return "Study [id=" + id + ", subject=" + subject + ", studyDuration=" + studyDuration + "]";
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
