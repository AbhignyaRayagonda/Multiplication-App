const form = document.getElementById('form');
const question = document.getElementById('question');
const input = document.getElementById('input');
const scoreBoard = document.getElementById('score');

let score= JSON.parse(localStorage.getItem('score')) || 0;

scoreBoard.innerText = `score: ${score}`;

const num1 = Math.ceil(Math.random() *10);
const num2 = Math.ceil(Math.random() * 10);
const correctAnswer = num1 * num2;

question.innerText = `What is ${num1} multiplyed by ${num2}?`;

if(!score) {
  score = 0;
}



form.addEventListener('submit', (e) => {
  e.preventDefault();
  const userAnswer = +input.value;
  
  if (userAnswer === correctAnswer) {
    score++;
  } else {
    score--;
  }
  
  updateLocalStorage();
  input.value = ' ';
})

function updateLocalStorage() {
  localStorage.setItem('score', JSON.stringify(score));
}