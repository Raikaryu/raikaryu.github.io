import { quiz_cinema } from './questions.js';
const questions = document.getElementById("questions-container");
const options = document.getElementById("options-container");
const suivant = document.getElementById("next-button")

// Variables pour suivre l'état du quiz
let currentQuestionIndex = 0; // Commence à la première question

// Fonction pour afficher une question basée sur l'index actuel
function loadQuestion() {
  // Vider le conteneur des options
  options.innerHTML = '';

  // Récupérer la question actuelle
  let currentQuestion = quiz_cinema.questions[currentQuestionIndex];
  
  // Injecter la question dans le HTML
  questions.innerText = currentQuestion.text;

  // Injecter les options dans le HTML 
  currentQuestion.options.forEach(answer => {
    const choix = document.createElement('button');
    choix.innerText = answer;
    choix.classList.add('options-container');
    options.appendChild(choix);
  });
}

// Ajouter un écouteur d'événements pour le bouton "Suivant"
suivant.addEventListener('click', () => {
  // Incrémenter l'index de la question
  currentQuestionIndex++;

  // Vérifier s'il reste des questions
  if (currentQuestionIndex < quiz_cinema.questions.length) {
    // Afficher la question suivante
    loadQuestion();
  } else {
    // Si plus de questions, indiquer la fin du quiz
    questions.innerText = 'Ton score est';
    options.innerHTML = ''; // Effacer les options
    suivant.style.display = 'none'; // Cacher le bouton Suivant
  }
});

// Charger la première question au chargement de la page
loadQuestion();
 