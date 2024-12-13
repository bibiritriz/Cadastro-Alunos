//Phone Mask
$('#InputPhone').mask('(00) 00000-0000');

//Array Students
let students = [];

//Array Courses
let courses = [];

//Array Courses
let periods = [
  {
    id: 1,
    name: "Manhã"
  },
  {
    id: 2,
    name: "Tarde"
  },
  {
    id: 3,
    name: "Noite"
  }
];

loadPeriods();

//Save
function save() {
  let stud = {
    id: students.length + 1,
    name: document.getElementById("InputName").value,
    email: document.getElementById("InputEmail").value,
    phone: document.getElementById("InputPhone").value,
    idCourse: document.getElementById("SelectCourses").value,
    idPeriod: document.querySelector("input[name=CheckRadio]:checked").id
  };

  $.ajax({
    url: "http://localhost:8080/students",
    type: "POST",
    contentType: "application/json",
    data: JSON.stringify(stud),
    success: (student) => {
      addNewRow(student);
      students.push(student);
      document.getElementById("FormAlunos").reset();
    }
  });
}

loadCourses();
loadStudents();

function loadCourses() {
  $.ajax({
    url: "http://localhost:8080/courses",
    type: "GET",
    async: false,
    success: (response) => {
      courses = response;
      for (let cour of response) {
        document.getElementById("SelectCourses").innerHTML += `<option value=${cour.id}>${cour.name}</option>`;
      }
    }
  });
}

function loadPeriods() {
  for (let peri of periods) {
    document.getElementById("CheckPeriod").innerHTML +=
      `<div class="form-check mb-1">
        <input class="form-check-input" type="radio" name="CheckRadio" id="${peri.id}" value="${peri.name}" ${peri.id === 1 ? 'checked' : ''} />
        <label class="form-check-label" for="${peri.id}">
          ${peri.name}
        </label>
      </div>`;
  }
}

function loadStudents() {
  $.getJSON("http://localhost:8080/students", (response) => {
    students = response;
    for (let stud of response) {
      addNewRow(stud);
    }
  });
}


function addNewRow(stud) {
  const table = document.getElementById("StudentsTable");

  const newRow = table.insertRow();

  const idNode = document.createTextNode(stud.id);
  newRow.insertCell().appendChild(idNode);

  const nameNode = document.createTextNode(stud.name);
  newRow.insertCell().appendChild(nameNode);

  const emailNode = document.createTextNode(stud.email);
  newRow.insertCell().appendChild(emailNode);

  const phoneNode = document.createTextNode(stud.phone);
  newRow.insertCell().appendChild(phoneNode);

  const courseNode = document.createTextNode(courses[stud.idCourse - 1].name);
  newRow.insertCell().appendChild(courseNode);

  const idPeriodNode = document.createTextNode(periods[stud.idPeriod - 1].name);
  newRow.insertCell().appendChild(idPeriodNode);
}
