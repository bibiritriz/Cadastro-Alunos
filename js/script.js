//Mascara
$('#InputPhone').mask('(00) 0000-0000');

//Array Alunos
var Alunos = [
  { id: 1, name: "Kayky Costa", email: "kayky.costa@fatec.com", telefone: "(11) 9999-9999", curso: 1, turno: "Manhã" }
];

//Array Cursos
var cursos = [
  { id: 1, name: "Análise e Desenvolvimento de Sistemas" },
  { id: 2, name: "Ciências da Computação" },
  { id: 3, name: "Engenharia de Software" }
];

loadAlunos();

//Salvar
function save() {

  let Turno;
  if (document.getElementById("Manha").checked) {
    Turno = "Manhã";
  } else if (document.getElementById("Tarde").checked) {
    Turno = "Tarde";
  } else if (document.getElementById("Noite").checked) {
    Turno = "Noite";
  }

  var aluno = {
    id: Alunos.length + 1,
    name: document.getElementById("InputName").value,
    email: document.getElementById("InputEmail").value,
    telefone: document.getElementById("InputPhone").value,
    curso: document.getElementById("SelectCurso").value,
    turno: Turno
  };

  addNewRow(aluno);
  Alunos.push(aluno);

  document.getElementById("FormAlunos").reset();
}

function loadAlunos() {
  for (let aluno of Alunos) {
    addNewRow(aluno);
  }
}

function addNewRow(aluno) {
  var tabela = document.getElementById("AlunosTable");

  var novaLinha = tabela.insertRow();

  var idNode = document.createTextNode(aluno.id);
  novaLinha.insertCell().appendChild(idNode);

  var nameNode = document.createTextNode(aluno.name);
  novaLinha.insertCell().appendChild(nameNode);

  var emailNode = document.createTextNode(aluno.email);
  var cell = novaLinha.insertCell();
  cell.className="d-none d-md-table-cell";
  cell.appendChild(emailNode);

  var phoneNode = document.createTextNode(aluno.telefone);
  var cell = novaLinha.insertCell();
  cell.className="d-none d-md-table-cell";
  cell.appendChild(phoneNode);

  var cursoNode = document.createTextNode(cursos[aluno.curso - 1].name);
  var cell = novaLinha.insertCell();
  cell.className="d-none d-md-table-cell";
  cell.appendChild(cursoNode);

  var turnoNode = document.createTextNode(aluno.turno);
  var cell = novaLinha.insertCell();
  cell.className="d-none d-md-table-cell";
  cell.appendChild(turnoNode);
}