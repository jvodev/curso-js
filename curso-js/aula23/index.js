//AVALIAÇÃO DE CURTO-CIRCUITO (SHORT-CIRCUIT)

/*
&& -> todas precisam ser verdadeiras (false & true = false) "o valor mesmo"
|| -> todas precisam ser falsas ()
*/


/*---------------------------------------------------------------------------------------------------------*
***********false*********************
0
''""``
null / undefined
NaN

Qualquer coisa diferente disso é true

------------------------------------------------------------------------------------------------------------*/

// console.log(NaN && true && 'Luana');

function falaOi() {
    return 'Oi';
}

const vaiExecutar = 'false'; // ele não é falso LITERAL, então ele retorna um valor true

console.log(vaiExecutar && falaOi());


