/*
João Vitor Amorim Barbosa tem 21 anos, pesa 70kg,
tem 1.73 de altura e seu IMC é de 
João Vitor nasceu em 2002.
*/

const nome = 'João Vitor Amorim Barbosa'
const idade = 21;
const peso = 70;
const altura = 1.73;
const imc = peso / (altura * altura);
const anoNascimento = 2002;

console.log(`${nome} tem ${idade} anos, pesa ${peso}kg, tem ${altura} de altura e seu IMC é de ${imc}`);
console.log(`${nome} nasceu em ${anoNascimento}.`)