const nome = 'João';

function falaNome() {
    console.log(nome);
}

function usaFalaNome() {
    const nome = 'Luana';
    falaNome();
}
usaFalaNome();