//Mascara Telefone
$('#InputPhone').mask('(00) 0000-0000');

//Array Alunos
let Alunos = [];

//Array Cursos
let cursos = [];

//Salvar
function save() {
  var aluno = {
    id: Alunos.length + 1,
    name: document.getElementById("InputName").value,
    email: document.getElementById("InputEmail").value,
    telefone: document.getElementById("InputPhone").value,
    curso: document.getElementById("SelectCurso").value,
    turno: document.querySelector("input[name=CheckRadio]:checked").value
  };

  addNewRow(aluno);
  Alunos.push(aluno);

  document.getElementById("FormAlunos").reset();
}

loadAlunos();

function loadAlunos() {
  for (let aluno of Alunos) {
    addNewRow(aluno);
  }
}

function addNewRow(aluno) {
  const tabela = document.getElementById("AlunosTable");

  const novaLinha = tabela.insertRow();

  const idNode = document.createTextNode(aluno.id);
  novaLinha.insertCell().appendChild(idNode);

  const nameNode = document.createTextNode(aluno.name);
  novaLinha.insertCell().appendChild(nameNode);

  const emailNode = document.createTextNode(aluno.email);
  const cell = novaLinha.insertCell();
  cell.className="d-none d-md-table-cell";
  cell.appendChild(emailNode);

  const phoneNode = document.createTextNode(aluno.telefone);
  cell.appendChild(phoneNode);

  const cursoNode = document.createTextNode(cursos[aluno.curso - 1].name);
  cell.appendChild(cursoNode);

  const turnoNode = document.createTextNode(aluno.turno);
  cell.appendChild(turnoNode);
}