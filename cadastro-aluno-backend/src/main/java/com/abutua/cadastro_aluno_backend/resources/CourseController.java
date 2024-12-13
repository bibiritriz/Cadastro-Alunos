package com.abutua.cadastro_aluno_backend.resources;

import java.util.Arrays;
import java.util.List;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;
import com.abutua.cadastro_aluno_backend.models.Course;

@RestController
@CrossOrigin
public class CourseController {
  private List<Course> courses = Arrays.asList(new Course(1, "Análise e Desenvolvimento de Sistemas"),
      new Course(2, "Ciências da Computação"),
      new Course(3, "Sistemas de Informação"),
      new Course(4, "Engenharia de Software"),
      new Course(5, "Redes de Computadores"),
      new Course(6, "Inteligência Artificial"),
      new Course(7, "Segurança da Informação"));

  @GetMapping("courses/{id}")
  public ResponseEntity<Course> getCourse(@PathVariable int id) {
    Course cour = courses.stream()
        .filter(c -> c.getId() == id)
        .findFirst()
        .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Course not found"));
    return ResponseEntity.ok(cour);
  }

  @GetMapping("courses")
  public List<Course> getCourses() {
    return courses;
  }
}
