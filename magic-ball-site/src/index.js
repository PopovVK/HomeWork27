import './styles.css';

const answers = [
  'Так',
  'Ні',
  'Можливо',
  'Не можу відповісти зараз',
  'Запитайте пізніше',
];

const askButton = document.getElementById('askButton');
const answerElement = document.getElementById('answer');

askButton.addEventListener('click', () => {
  const randomIndex = Math.floor(Math.random() * answers.length);
  const randomAnswer = answers[randomIndex];
  answerElement.textContent = randomAnswer;
  answerElement.classList.remove('hidden');
});
