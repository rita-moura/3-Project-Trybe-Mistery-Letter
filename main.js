const buttonCreateLetter = document.getElementById('criar-carta');
const generatedLetter = document.getElementById('carta-gerada');
const groups = [
  ['newspaper', 'magazine1', 'magazine2'],
  ['medium', 'big', 'reallybig'],
  ['rotateleft', 'rotateright'],
  ['skewleft', 'skewright'],
];

function assignRandomClasses(element) {
  const availableGroups = groups.map((group) => [...group]);
  const assignedClasses = [];
  availableGroups.forEach((group) => {
    if (group.length === 0) return;
    const randomIndex = Math.floor(Math.random() * group.length);
    const randomClass = group.splice(randomIndex, 1)[0];
    assignedClasses.push(randomClass);
  });

  // eslint-disable-next-line no-param-reassign
  element.className = assignedClasses.join(' ');
}

function createLetter() {
  const letterText = document.getElementById('carta-texto').value;

  if (letterText.trim() === '') {
    generatedLetter.innerText = 'Por favor, digite o conteúdo da carta.';
  } else {
    const words = letterText.split(' ');
    const letterWithSpans = words.map((word) => `<span>${word}</span>`).join(' ');
    generatedLetter.innerHTML = letterWithSpans;

    const wordSpan = generatedLetter.getElementsByTagName('span');
    Array.from(wordSpan).forEach((word) => {
      word.addEventListener('click', () => {
        assignRandomClasses(word);
      });
      assignRandomClasses(word);
    });
  }
}

buttonCreateLetter.addEventListener('click', createLetter);
