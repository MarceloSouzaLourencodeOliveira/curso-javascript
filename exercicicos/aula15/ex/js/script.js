let numero = prompt('Digite um número');
numero
const numeroTitulo = document.getElementById('numero-titulo');

const texto = document.getElementById('texto');

numeroTitulo.innerHTML = numero;
texto.innerHTML = `<p>Seu número + 2 é ${numero + 2}.</p>`;