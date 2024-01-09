const pessoa = {
    //nome: 'João',
    sobrenome: 'Barbosa',
    idade: 21,
    endereco: {
        rua: 'Estrada Martins Guimarães',
        numero: 104,
        bairro: 'Vila Tesouro',
        cidade: 'São José dos Campos',
        estado: 'São Paulo',
        país: 'Brasil'
    }
};

 //Atribuição via desustruturação
const { nome = 'Não existe', sobrenome} = pessoa;
console.log(nome, sobrenome);