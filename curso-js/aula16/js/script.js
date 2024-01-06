const numero = Number(prompt('Digite um número:'));
const numeroTitulo = document.getElementById('numero-titulo');


const texto = document.getElementById('texto1');

    const txt1 = document.getElementById('txt1');

        const txt2 = document.getElementById('txt2');

            const txt3 = document.getElementById('txt3');

                const txt4 = document.getElementById('txt4');

                    const txt5 = document.getElementById('txt5');


numeroTitulo.innerHTML = numero;
texto.innerHTML = `Raiz quadrada: ${Math.sqrt(numero)}`

txt1.innerHTML = `${numero} é inteiro: ${Number.isInteger(numero)}`

txt2.innerHTML = `É NaN: ${Number.isNaN(numero)}`

txt3.innerHTML = `Arredondado para baixo: ${Math.floor(numero)}`

txt4.innerHTML = `Arredondado para cima: ${Math.ceil(numero)}`

txt5.innerHTML = `Com duas casas decimais: ${numero.toFixed(2)}`