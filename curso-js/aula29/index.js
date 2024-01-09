const data = new Date('1987-04-11 00:00:00');
const diaSemana = data.getDay();

let diaSemanaTexto;

switch (diaSemana) {
case 0:
    diaSemanaTexto = 'Domingo';
    break;

case 1:
    diaSemanaTexto = 'Segunda';
    break;

case 2:
    diaSemanaTexto = 'Terça';
    break;

case 3:
    diaSemanaTexto = 'Quarta';
    break;  

case 4:
    diaSemanaTexto = 'Quinta';
    break;

case 5:
    diaSemanaTexto = 'Sexta';
    break;

case 6:
    diaSemanaTexto = 'Sabádo';
    break;
default:
    diaSemanaTexto = '?';
    break;
}

console.log(diaSemanaTexto )

// isso é errado

// if (diaSemana === 0) {
//     diaSemanaTexto = 'Domingo';
// } else if (diaSemana === 1) {
//     diaSemanaTexto = 'Segunda';
// } // etc....
// else if (diaSemana === 2) {
//     diaSemanaTexto = 'Terça';
// } // etc....
// else if (diaSemana === 3) {
//     diaSemanaTexto = 'Quarta';
// } // etc....
// else if (diaSemana === 4) {
//     diaSemanaTexto = 'Quinta';
// } // etc....
// else if (diaSemana === 5) {
//     diaSemanaTexto = 'Sexta';
// } // etc....
// else if (diaSemana === 6) {
//     diaSemanaTexto = 'Sabado';
// } // etc....

// console.log(diaSemanaTexto);