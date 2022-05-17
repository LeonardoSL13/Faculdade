const prompt = require('prompt-sync')();

let students = [];


while (true) {
  const student = {
    name: "",
    age: 0,
    vehicle: "",
  }
  console.clear();
  while (true) {
    student.name = prompt('Digite o nome do aluno (digite "FINALIZA" para terminar os cadastros): ')
    if (student.name != "") {
      break;
    } else {
      console.clear();
      console.log("nome inválido")
    }
  }

  if (student.name.toLowerCase() == 'finaliza') {
    break;
  }
  console.clear();
  while (true) {
    student.age = Number(prompt('Digite a idade do aluno: '))
    if (student.age > 17) {
      break;
    } else {
      console.clear();
      console.log("idade inválida")
    }
  }
  console.clear();
  while (true) {
    student.vehicle = prompt('Digite o veículo do aluno("Carro", "Moto" ou "Nenhum"): ').toLowerCase()
    if (student.vehicle == "carro" || student.vehicle == "moto" || student.vehicle == "nenhum") {
      break;
    } else {
      console.clear();
      console.log("Veículo inválido")
    }
  }

  students.push(student);
}
console.clear();

function is18to23(student) {
  return student.age >= 18 && student.age <= 23
}
function is24to30(student) {
  return student.age >= 24 && student.age <= 30
}
function isMoreThan31(student) {
  return student.age > 30
}
function haveCar(student) {
  return student.vehicle == "carro"
}
function haveMotorcycle(student) {
  return student.vehicle == "moto"
}
function haveNoVehicle(student) {
  return student.vehicle == "nenhum"
}

let option = 0
while (true) {
  console.clear();
  option = Number(prompt(`
  Digite (1) para gerar o relatório específico.
  Digite (2) para gerar o relatório consolidado.
  Digite a opção desejada: `))

  if (option == 1 || option == 2) {
    break;
  } else {
    console.log("Opção inválida")
  }
}
console.clear();

switch (option) {
  case 1:

    console.log(`
total de alunos entre 18 e 23 anos: ${students.filter(is18to23).length},
  ${students.filter(is18to23).filter(haveCar).length} possuem carro,
  ${students.filter(is18to23).filter(haveMotorcycle).length} possuem moto,
  ${students.filter(is18to23).filter(haveNoVehicle).length} não possuem veículo.
 `)

    console.log(`
total de alunos entre 24 e 30 anos: ${students.filter(is24to30).length},
  ${students.filter(is24to30).filter(haveCar).length} possuem carro,
  ${students.filter(is24to30).filter(haveMotorcycle).length} possuem moto,
  ${students.filter(is24to30).filter(haveNoVehicle).length} não possuem veículo.
`)

    console.log(`
total de alunos com mais de 31 anos: ${students.filter(isMoreThan31).length},
  ${students.filter(isMoreThan31).filter(haveCar).length} possuem carro,
  ${students.filter(isMoreThan31).filter(haveMotorcycle).length} possuem moto,
  ${students.filter(isMoreThan31).filter(haveNoVehicle).length} não possuem veículo.
`)
    break;
  case 2:
    console.log(`
total de alunos: ${students.length},
  ${students.filter(haveCar).length} possuem carro,
  ${students.filter(haveMotorcycle).length} possuem moto,
  ${students.filter(haveNoVehicle).length} não possuem veículo.
`)
    break;
  default:
    console.log("Opção inválida");
}