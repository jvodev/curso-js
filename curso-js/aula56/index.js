//Factory function (Função fábrica)
//Constructor function (Função construtora)

function criaPessoa(nome, sobrenome, a, p) {
    return {
        nome, 
        sobrenome,

        // getter
        get nomeCompleto() {
            return `${nome} ${sobrenome}`
        },

        // setter

        set nomeCompleto(valor) {
            console.log(valor);
        },

        fala: function(assunto) {
            return `${this.nome} está ${assunto}.`;
        },
        altura: a,
        peso: p,
        // Getter
        get imc() {
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2);
        }
    };
}

const p1 = criaPessoa('João', 'Vitor', 1.8, 60);
p1.nomeCompleto = `João Vitor Amorim Barbosa`
console.log(p1.nome);
console.log(p1.sobrenome);
console.log(p1.imc);

console.log(p1.nomeCompleto)

// console.log(p1.fala('falando sobre JS'));
