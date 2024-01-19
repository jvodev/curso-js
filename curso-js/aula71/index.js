// defineProperty - defineProperties
function Produto(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;

    Object.defineProperty(this, 'estoque', {
        enumerable: true,   // mostra a chave
        value: estoque,                         // MUITO IMPORTANTE
        writable: false, // pode alterar o valor
        configurable: false // não pode reconfigurar a chave ou pode F/T
    })
}

const p1 = new Produto('Camiseta', 20, 3);
p1.estoque = 70000;
delete p1.estoque;
console.log(p1);