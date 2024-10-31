import { quiz_cinema } from './questions.js';
const questions = document.getElementById("questions-container");
const options = document.getElementById("options-container");
const suivant = document.getElementById("next-button")
const rejouer = document.getElementById("replay-button")

let currentQuestionIndex = 0;
function loadQuestion() {

  options.innerHTML = '';
  let currentQuestion = quiz_cinema.questions[currentQuestionIndex];
  questions.innerText = currentQuestion.text;
  currentQuestion.options.forEach(answer => {
    const choix = document.createElement('button');
    choix.innerText = answer;
    choix.classList.add('options-container');
    options.appendChild(choix);
    checkAnswer(choix, currentQuestion)
  });
}

function checkAnswer (answer, question){

  answer.addEventListener('click',() => {
    if (answer.innerText == question.correct_answer) {
      answer.classList.add('right-answer')
    }
    else {
      answer.classList.add('wrong-answer')
    }
  })
}

suivant.addEventListener('click', () => {

  currentQuestionIndex++;
  if (currentQuestionIndex < quiz_cinema.questions.length) {

    loadQuestion();
  } else {
    questions.innerText = 'Ton score est';
    options.innerHTML = ''; 
    suivant.style.display = 'none';
    rejouer.style.display = 'inline-block'
  }
});

rejouer.addEventListener('click',() => {
  currentQuestionIndex = 0;
  suivant.style.display = 'inline-block'; 
  rejouer.style.display = 'none'
  loadQuestion();
})
loadQuestion();


