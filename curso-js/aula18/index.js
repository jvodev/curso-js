/*

const nome01 = 'João';
const sobrenome01 = 'Vitor';
const idade01 = 21;
const nome02 = 'Luana';
const sobrenome02 = 'Junqueira';
const idade02 = 23;

*/

// PODEMOS REESCREVER DESTA FORMA:

// ARRAY = COLCHETE // OBJETO = CHAVES - ABAIXO

/*
const pessoa1 = {
    nome: 'João Vitor',
    sobrenome: 'Amorim Barbosa',
    idade: 21
};



console.log(pessoa1.sobrenome);
*/

// função que cria objetos

function criaPessoa(nome, sobrenome, idade) {
    return {
        nome: nome,
        sobrenome: sobrenome,
        idade: idade,
    };
}

const pessoa1 = criaPessoa('João', 'Amorim', 21);

const pessoa2 = criaPessoa('Luana', 'Junqueira', 23);

const pessoa3 = criaPessoa('Marilia', 'Dalva', 49);

const pessoa4 = criaPessoa('Emerson', 'Barbosa', 51);

const pessoa5 = criaPessoa('Jessica', 'Amorim', 32);

console.log(pessoa1.nome);
console.log(pessoa2.nome);
console.log(pessoa3.nome);
console.log(pessoa4.nome);
console.log(pessoa5.nome);


// Criando métodos

const carro1 = {
    marca: 'honda',
    modelo: 'NSX',
    ano: 1996,

    fala() {
        return(`Este é um ${carro1.marca} modelo ${carro1.modelo} do ano ${carro1.ano}`)
    }
}

console.log(carro1.fala());
