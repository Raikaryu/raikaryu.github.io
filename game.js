import { quiz_cinema } from './questions.js';
const questions = document.getElementById("questions-container");
const options = document.getElementById("options-container");
const suivant = document.getElementById("next-button")
const rejouer = document.getElementById("replay-button")


let currentQuestionIndex = 0;
let score = 0

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

function checkAnswer (answer, question) {
  suivant.disabled = true;
  answer.addEventListener('click',() => {
    
    if (answer.innerText == question.correct_answer) {
      answer.classList.add('right-answer')
      suivant.disabled = false;
      score += 2
      
    }

    else {
      answer.classList.add('wrong-answer')
      suivant.disabled = false;
      
    }

    const allButtons = options.getElementsByTagName('button');
      Array.from(allButtons).forEach(btn => {
        btn.disabled = true;
    })
  })
}

function messageFin () {
  if (score <= 4 ) {
    let message = score + "/10 = nul à chier 😱"
    return message
  }  
  else {
    let message = score + "/10 = bien joué, beau gosse 😎"
    return message
    }
}

suivant.addEventListener('click', () => {

  currentQuestionIndex++;
  if (currentQuestionIndex < quiz_cinema.questions.length) {

    loadQuestion();
  } else {
    questions.innerText = messageFin();
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
  score = 0
})

loadQuestion();


