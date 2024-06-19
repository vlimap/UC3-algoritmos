document.addEventListener('DOMContentLoaded', () => {
    let nome = document.getElementById('nome');
    let mensagem = document.getElementById('mensagem');
    nome.addEventListener('input', () => {
        mensagem.textContent = `Você digitou: ${nome.value}`;
    });

});