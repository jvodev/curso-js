const frutas = ['Pera', 'Maçã', 'Uva'];

// for (let i = 0; i < frutas.length; i++) {
//     console.log(frutas[i]);
// }

// FOR IN -> LÊ INDICES ou CHAVES do objeto

// for (let indice in frutas) {
//     console.log(frutas[indice]);
// }

const pessoa = {
    nome: 'João',
    sobrenome: 'Barbosa',
    idade: 21
};

for (let chave in pessoa) {
    console.log(chave, pessoa[chave]);
}