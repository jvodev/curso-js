// Definindo um objeto Pessoa
function Pessoa(nome) {
    this.nome = nome;
  }
  
  // Adicionando um método ao protótipo de Pessoa
  Pessoa.prototype.apresentar = function() {
    console.log('Olá, meu nome é ' + this.nome);
  };
  
  // Criando instâncias de Pessoa
  const pessoa1 = new Pessoa('Alice');
  const pessoa2 = new Pessoa('Bob');
  
  // Chamando o método do protótipo
  pessoa1.apresentar(); // Saída: Olá, meu nome é Alice
  pessoa2.apresentar(); // Saída: Olá, meu nome é Bob