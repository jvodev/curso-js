// ternario
// ? :

//const pontuacaoUsuario = 999;
//if (pontuacaoUsuario >= 1000) {
//    console.log('Usuário VIP');
//}   else {
//    console.log('Usuário normal');
//}


// o código abaixo e o código acima são a mesma coisa, repare o ternario.


const pontuacaoUsuario2 = 999;
//(condicao) ? 'Valor para verdadeiro' : 'Valor para falso';
const nivelUsuario = pontuacaoUsuario2 >= 1000 ? 'Usuário VIP' : 'Usuário normal';
console.log(nivelUsuario);