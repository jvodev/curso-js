const form = document.querySelector(".form")
const resultado = document.getElementById("resultado"); // Seleciona o elemento com o ID 'resultado'

form.addEventListener("submit", (e) => {

    nome = form.querySelector('#nome').value; // Seleciona o valor do input do nome
    const sobrenome = form.querySelector('#sobrenome').value; // Seleciona o valor do input do sobrenome
    const peso = form.querySelector('#peso').value; // Seleciona o valor do input do peso
    const altura = form.querySelector('#altura').value; // Seleciona o valor do input da altura

    const objeto = {
        nome: nome,
        sobrenome: sobrenome,
        peso: peso, 
        altura: altura
    }

    console.log(objeto)

    resultado.textContent = `Nome: ${nome}, Sobrenome: ${sobrenome}, Peso: ${peso}, Altura: ${altura}`;


    e.preventDefault();
})
