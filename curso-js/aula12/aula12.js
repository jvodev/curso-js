var varA = 'A'; // B
var varB = 'B'; // C
var varC = 'C'; // A

const varATemp = varA;
varA = varB;
varB = varC;
varC = varATemp;

/* método mais fácil 

[varA, varB, varC] = [varB, varC, varA];

*/

console.log(varA, varB, varC);