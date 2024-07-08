const questions = [
  {
    question: "What is 1 + 1?",
    choices: ["5", "7", "2"],
  },
  {
    question: "What is 5 x 5?",
    choices: ["20", "15", "25"],
  },
  {
    question: "What is 100 / 10?",
    choices: ["20", "15", "10"],
  },
];

const startGameButton = document.getElementById("button");
let index = 0,
  points = 0;

startGameButton.addEventListener("click", () => {
  firstPage.classList.add("hidden");
  secondPage.classList.remove("hidden");
  nextQuestion(index);
});

const firstPage = document.getElementById("first");
const secondPage = document.getElementById("second");
const questionElement = document.getElementById("question");
const buttonElements = document.querySelectorAll("#choices button");
const thirdPage = document.getElementById("third");
const pointsElement = document.getElementById("points");

function nextQuestion(questionIndex) {
  let currentQuestion = questions[questionIndex].question;
  questionElement.textContent = currentQuestion;
  buttonElements.forEach((button, buttonindex) => {
    button.textContent = questions[questionIndex].choices[buttonindex];
  });
}

buttonElements.forEach((button, buttonindex) => {
  button.addEventListener("click", () => {
    if (buttonindex === buttonElements.length - 1) {
      points += 10;
    }
    index++;
    if (index <= questions.length - 1) {
      nextQuestion(index);
    } else {
      secondPage.classList.add("hidden");
      thirdPage.classList.remove("hidden");
      pointsElement.textContent = points;
    }
  });
});
