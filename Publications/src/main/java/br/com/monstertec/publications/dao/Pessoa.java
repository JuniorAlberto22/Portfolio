package br.com.monstertec.publications.dao;

import java.util.Date;

public class Pessoa {

	private long id;
	private String name;
	private Date birthDate;
	private char genre;
	
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public Date getBirthDate() {
		return birthDate;
	}
	public void setBirthDate(Date birthDate) {
		this.birthDate = birthDate;
	}
	public char getGenre() {
		return genre;
	}
	public void setGenre(char genre) {
		this.genre = genre;
	}
	
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	@Override
	public String toString() {
		return "Pessoa [name=" + name + ", birthDate=" + birthDate + ", genre=" + genre + "]";
	}
}
