import { quiz_cinema } from './questions.js';
const questions = document.getElementById("questions-container");
const options = document.getElementById("options-container");
const firstQuestion = quiz_cinema.questions[0]
questions.innerText = firstQuestion.text;
firstQuestion.options.forEach(answer => {
    const choix = document.createElement('button');
    choix.innerText = answer;
    choix.classList.add('options-container');
    options.appendChild(choix);
  });
 