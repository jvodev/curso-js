// Posso ou não posso ter parâmetros na função, o JS não se importa kk.. '
function funcao() {
    let total = 0;
    for (let argumento of arguments) {  // arguments sustenta todos os argumentos enviados
        total += argumento;
    }
    
     //console.log(total);

}
//funcao(1, 2, 3, 4, 5, 6, 7);


function conta(operador, acumulador, ...numeros) {

    for(let numero of numeros) {
        if (operador === '+') acumulador += numero;
        if (operador === '-') acumulador -= numero;
        if (operador === '/') acumulador /= numero;
        if (operador === '*') acumulador *= numero;
    }

    console.log(acumulador)
    //console.log(operador, acumulador, numeros)
}
conta('*',0 , 20, 30, 40, 50);