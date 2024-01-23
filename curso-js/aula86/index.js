// function rand(min, max) {
//     min *= 1000;
//     max *= 1000;
//     return Math.floor(Math.random() * (max - min) + min);
// }

// function esperaAi(msg, tempo) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(msg);
//         }, tempo);
//     });
// }

// esperaAi('Frase 1', rand(1, 3))
//     .then(resposta => {
//         console.log(resposta);
//         return esperaAi('Frase 2', rand(1, 3));
//     })
//     .then(resposta => {
//         console.log(resposta);
//         return esperaAi('Frase 3', rand(1, 3));
//     })
//     .then(resposta => {
//         console.log(resposta);
//     })
//     .catch();

let minhaPromise = new Promise((resolve, reject) => {
    // Simulando uma operação assíncrona que demora 1 segundo
    setTimeout(() => {
      let sucesso = true;
  
      if (sucesso) {
        resolve("Operação bem-sucedida!");
      } else {
        reject("Ops! Algo deu errado.");
      }
    }, 1000);
  });
  
  // Utilizando a Promise
minhaPromise
.then(resultado => {
  console.log(resultado); // Operação bem-sucedida!
})
.catch(erro => {
  console.error(erro); // Ops! Algo deu errado.
});