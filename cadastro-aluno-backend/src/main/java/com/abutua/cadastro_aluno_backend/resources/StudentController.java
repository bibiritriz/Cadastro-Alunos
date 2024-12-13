package com.abutua.cadastro_aluno_backend.resources;

import java.net.URI;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.abutua.cadastro_aluno_backend.models.Student;

@RestController
@CrossOrigin
public class StudentController {
  private List<Student> students = new ArrayList<>(Arrays.asList(
    new Student(1, "Beatriz Camargo", "BeatrizCamargo@gmail.com", "(11)99999-9999", 1, 1),
    new Student(2, "Kayky Costa", "KaykyCosta@gmail.com", "(11)98888-8888", 2, 2),
    new Student(3, "Lucas Oliveira", "LucasOliveira@gmail.com", "(11)97777-7777", 3, 1),
    new Student(4, "Ana Souza", "AnaSouza@gmail.com", "(11)96666-6666", 4, 3)));

  @GetMapping("students/{id}")
  public ResponseEntity<Student> getStudent(@PathVariable int id) {
    Student stud = students.stream()
        .filter(s -> s.getId() == id)
        .findFirst()
        .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Student not found"));
    return ResponseEntity.ok(stud);
  }

  @PostMapping("students")
  public ResponseEntity<Student> save(@RequestBody Student student) {
    student.setId(students.size() + 1);
    students.add(student);

    URI location = ServletUriComponentsBuilder
        .fromCurrentRequest()
        .path("/{id}")
        .buildAndExpand(student.getId())
        .toUri();

    return ResponseEntity.created(location).body(student);
  }

  @GetMapping("students")
  public List<Student> getStudents() {
    return students;
  }
}
