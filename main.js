const buttonCreateLetter = document.getElementById('criar-carta');
const generatedLetter = document.getElementById('carta-gerada');

const createLetter = () => {
  const letterText = document.getElementById('carta-texto').value;

  const words = letterText.split(' ');
  const letterWithSpans = words.map((word) => `<span>${word}</span>`).join(' ');

  generatedLetter.innerHTML = letterWithSpans;
};

buttonCreateLetter.addEventListener('click', createLetter);
