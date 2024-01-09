const verdadeira = true;

// Let tem escopo de bloco { ... }
// Var só tem escopo de função

let nome = 'João'; // criando
var nome2 = 'João';

if (verdadeira) {
    let nome = 'Vitor'; // criando dentro deste bloco
    console.log(nome, nome2);
}