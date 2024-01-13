// Declaração de função (Function hoisting)
function falaOi() {
    console.log('Oie');
}
falaOi()

console.log('#######################################################')

// First-Class Objects (Objetos de primeira classe)
// Function expression

const souUmDado = function() {
    console.log('Sou um dado.');
}
souUmDado();
//const nome = 'João';

console.log('#######################################################')


function executaFuncao(funcao) {
    console.log('Vou executar sua função abaixo')
}

executaFuncao(souUmDado);

console.log('#######################################################')

// Arrow Function
const funcaoArrow = () => {
    console.log('Sou uma arrowFunction');
};
funcaoArrow()
