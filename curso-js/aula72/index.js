// Definindo um objeto com getters e setters

const pessoa = {
    _nome: 'João', // Convenção para indicar que essa propriedade é "privada"
  
    // Getter para obter o valor da propriedade _nome
    get nome() {
      console.log('Obtendo nome');
      return this._nome;
    },
  
    // Setter para definir o valor da propriedade _nome
    set nome(novoNome) {
      console.log('Definindo nome');
      this._nome = novoNome;
    }
  };
  
  // Usando o getter e setter
  console.log(pessoa.nome); // Obtendo nome
  pessoa.nome = 'Luana'; // Definindo nome
  console.log(pessoa.nome); // Obtendo nome
  