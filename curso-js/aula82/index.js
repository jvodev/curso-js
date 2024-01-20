// Definindo a classe Pai
class Pai {
    // Construtor da classe Pai
    constructor(nome) {
      this.nome = nome;
    }
  
    // Método da classe Pai
    saudacao() {
      return `Olá, eu sou ${this.nome}.`;
    }
  }
  
  // Definindo a classe Filho, que herda de Pai
  class Filho extends Pai {
    // Construtor da classe Filho
    constructor(nome, brinquedo) {
      // Chamando o construtor da classe pai (Pai) usando super()
      super(nome);
      this.brinquedo = brinquedo;
    }
  
    // Novo método específico da classe Filho
    brincar() {
      return `${this.nome} está brincando com ${this.brinquedo}.`;
    }
  }
  
  // Criando uma instância de Pai
  const pai = new Pai('Pai');
  
  // Criando uma instância de Filho
  const filho = new Filho('Filho', 'bola');
  
  // Usando métodos das classes
  console.log(pai.saudacao());    // Saída: Olá, eu sou Pai.
  console.log(filho.saudacao());  // Saída: Olá, eu sou Filho.
  console.log(filho.brincar());    // Saída: Filho está brincando com bola.