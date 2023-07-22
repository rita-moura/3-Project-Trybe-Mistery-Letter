document.getElementById('criar-carta').addEventListener('click', () => {
  const cartaTexto = document.getElementById('carta-texto').value;
  const cartaGerada = document.getElementById('carta-gerada');

  const palavras = cartaTexto.split(' ');
  let cartaComSpan = '';

  for (let i = 0; i < palavras.length; i += 1) {
    cartaComSpan += `<span>${palavras[i]}</span> `;
  }

  cartaGerada.innerHTML = cartaComSpan;
});
