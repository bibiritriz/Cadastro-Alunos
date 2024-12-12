package com.abutua.cadastro_aluno_backend.models;

public class Course {
  private int id;
  private String name;

  public Course(){

  }

  public Course(String name){
    this.name = name;
  }

  public int getId(){
    return id;
  }

  public String getName(){
    return name;
  }

  public void setId(int id){
    this.id = id;
  }

  public void setName(String name){
    this.name = name;
  }
}
