/* eslint-disable no-return-assign */
/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
/* eslint-disable no-console */
const faker = require('faker');

faker.locale = 'pt_BR';
const pessoa = [];
// eslint-disable-next-line no-plusplus
for (let i = 0; i < 1000; i++) {
  const genders = [0, 1];
  const gender = faker.random.arrayElement(genders);
  const name = faker.name.findName('', '', gender);
  const birth = faker.date.between('1910-01-01', '2019-01-01');
  const lastpurchase = (faker.date.past(3));
  const countpurchase = faker.random.number(40);

  const cliente = {
    name,
    birth,
    gender,
    lastpurchase,
    countpurchase,
  };

  pessoa.push(cliente);
}

function nomeCaracter(char) {
  const newPessoa = pessoa.filter((value) => value.name.charAt(0) === char);
  return newPessoa;
}

function totalRegistros(char) {
  const newRegistro = pessoa
    .filter((value) => value.name.charAt(0) === char)
    .reduce((registro) => registro += 1, 0);
  return newRegistro;
}

function retornaArray() {
  const newPessoa = pessoa.map((element) => element);
  return newPessoa;
}

function apenasNome() {
  const newPessoa = pessoa.map((value) => value.name);
  return newPessoa;
}

function apenasPrimeiroNome() {
  const newPessoa = pessoa.map((value) => value.name.split(' ')[0]);
  return newPessoa;
}

function apenasPrimeiroNomeComChar(char) {
  const newPessoa = pessoa.map((value) => value.name.split(' ')[0]).filter((value2) => value2.charAt(0) === char);
  return newPessoa;
}

function apenasMaiores() {
  const newPessoa = pessoa.filter((value) => value.birth.getFullYear() <= 2001-01-01);
  return newPessoa;
}

function contemNome(nome) {
  const newPessoa = pessoa.some((value) => value.name.split(' ')[0] === nome);
  return newPessoa;
}

function totalVendas() {
  const newPessoa = pessoa.map((value) => value.countpurchase).reduce((acc,next) => acc + next, 0);
  return newPessoa;
}

function ultimaCompra() {
  const newPessoa = pessoa.filter((value) => value.lastpurchase.getFullYear() <= 2019-01-01);
  return newPessoa;
}

function realizouCompras() {
  const newPessoa = pessoa.filter((value) => value.countpurchase > 15);
  return newPessoa;
}