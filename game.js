import { quiz_cinema } from './questions.js';
const questions = document.getElementById("questions-container");
const options = document.getElementById("options-container");
const suivant = document.getElementById("next-button");
const rejouer = document.getElementById("replay-button");
const timer = document.getElementById("timer");

let currentQuestionIndex = 0;
let score = 0;
let myBarProgress = 0;
let time = 10;
let intervalId = null;

function loadQuestion() {
  options.innerHTML = '';
  let currentQuestion = quiz_cinema.questions[currentQuestionIndex];
  questions.innerText = currentQuestion.text;
  currentQuestion.options.forEach(answer => {
    const choix = document.createElement('button'); // renommer choix (+ explicite)
    choix.innerText = answer;
    choix.classList.add('options-container');
    options.appendChild(choix);
    checkAnswer(choix, currentQuestion)
  });
  
  startTimer();//lancer le timer 
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
        
    });
    stopTimer();
  });
  
}

function messageFin () { //récupérer longueur du tableau pour calcul du score
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
  addProgress();
  time= 10
});

rejouer.addEventListener('click',() => {
  currentQuestionIndex = 0;
  suivant.style.display = 'inline-block'; 
  rejouer.style.display = 'none'
  loadQuestion();
  score = 0;
  myBarProgress = 0;
  resetProgress()
})

function addProgress() {
   myBarProgress += 100 / quiz_cinema.questions.length
    if (myBarProgress > 100) {
        myBarProgress = 100;
    }
    document.getElementById("progressBarFull").style.width = myBarProgress + "%"; // afficher le % ?
}

function resetProgress() {
  document.getElementById("progressBarFull").style.width = "0%";
}
// ajouter un timer

  //déclarer les variables à utiliser

  function startTimer() {
    intervalId= setInterval(updateTimer, 1000);
}
function updateTimer() {
    timer.innerHTML =  time;
    time--;
    if (time < 0) {
        time = 10;
        stopTimer();
        skipQuestion();
    }
  }
function stopTimer() {
    clearInterval(intervalId);
}
function skipQuestion(){
  currentQuestionIndex++;
  if (currentQuestionIndex < quiz_cinema.questions.length) {
    loadQuestion();
  } else {
    questions.innerText = messageFin();
    options.innerHTML = '';
    suivant.style.display = 'none';
    rejouer.style.display = 'inline-block'
   }
  addProgress();
}

loadQuestion();