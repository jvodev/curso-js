// Função construtora -> constroi objetos -> sempre iniciar seu nome com letra maiúscula
// Função fabrica -> retorna objetos 
// Construtora -> Pessoa (new)
function Pessoa(nome, sobrenome) {
    // Privadas
    const ID = 123456;

    const metodoInterno = function() {

    };

    //Atributos ou métodos públicos
    this.nome = nome;// Pessoa.nome = 
    this.sobrenome = sobrenome;

    this.metodo = function() {
        console.log(this.nome + ': Sou um método.')
    }
}

const p1 = new Pessoa('João', 'Vitor');
const p2 = new Pessoa('Maria', 'Oliviera');
p1.metodo();