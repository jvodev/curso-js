function saudacao(nome) {
    return `Bom dia ${nome}!`;
}

//const variavel = saudacao('Luiz');
//console.log(variavel);

function soma(x, y) {
    return x + y;
}

const resultado = soma(2, 10);
console.log(resultado);

console.log(saudacao('João'));

// função anonima

const raiz = function(n) {
    return n ** 0.5;
};

console.log(raiz(9));
console.log(raiz(16));
console.log(raiz(121));
console.log(raiz(364));

// arrows functions

const potencia = (n) => n ** n;
console.log(potencia(2));