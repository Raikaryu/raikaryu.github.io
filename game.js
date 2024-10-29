import { quiz_cinema } from './questions.js';
const questions = document.getElementById("questions-container");
//const options = document.getElementById("options-container");
const firstQuestion = quiz_cinema.questions[0].text
questions.innerHTML = firstQuestion;
firstQuestion.quiz_cinema.forEach(options => {
    const options = document.createElement('button');
    options.innerText = quiz_cinema.questions[0].options;
    __________.classList.add('__________');
    __________.appendChild(__________);
  });