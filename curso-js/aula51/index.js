// return
// retorna um valor
// termina a função

// function soma(a, b) {
//     return a + b;
// }

// function soma2(a, b) {
//     console.log(a, b);
// }

// soma2(5, 2);

// document.addEventListener('click', function() {
//     document.body.style.backgroundColor = 'white';
// });

// function criaPessoa(nome, sobrenome) {
//     return {nome: nome, sobrenome: sobrenome };
// }

// const p1 = criaPessoa('João', 'Vitor');
// const p2 = {
//     nome: 'Luana',
//     sobrenome: 'Junqueira'
// };

// console.log(typeof p1);
// console.log(typeof p1);

// function falaFrase(comeco) {
//     function falaResto(resto) { //
//         return comeco + ' ' + resto;//
//     }                           //
//     return falaResto;
// }

// const olaMundo = falaFrase('Olá');
// console.log(olaMundo('mundo!'));

function criaMultiplicador(multiplicador) {
    // multiplicador
    return function(n) {
        return n * multiplicador;
    };
}

const duplica = criaMultiplicador(2);
const triplica = criaMultiplicador(3);
const quadriplica = criaMultiplicador(4);

console.log(duplica(2));