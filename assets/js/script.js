var timerEl = document.getElementById("time");
var questionEl = document.getElementById("question");
var aEl = document.getElementById("a");
var bEl = document.getElementById("b");
var cEl = document.getElementById("c");

var myQuestions = [
  {
    question: "What is JavaScript most commonly used for?",
    answers: [
      { a: "Making shoes", answer: false },
      { b: "Making dynamic webpages", answer: true },
      { c: "Baking cakes", answer: false },
    ],
  },
  {
    question: "Which of the following is true about JavaScript?",
    answers: [
      { a: "It is right-oriented", answer: false },
      { b: "It is object-oriented", answer: true },
      { c: "It is not oriented", answer: false },
    ],
  },
];

currentQuestion = myQuestions[0].question;
currentA = myQuestions[0].answers[0].a;
currentB = myQuestions[0].answers[1].b;
currentC = myQuestions[0].answers[2].c;

function countdown() {
  var timeLeft = 100;
  var timeInterval = setInterval(function () {
    timeLeft--;
    timerEl.textContent = timeLeft + " seconds";

    if (timeLeft === 0) {
      clearInterval(timeInterval);
    }
  }, 1000);
  questionEl.textContent = currentQuestion;
  aEl.textContent = currentA;
  bEl.textContent = currentB;
  cEl.textContent = currentC;

  a.addEventListener("click", function () {
    for (i = 1; i < myQuestions.length; i++) {
      currentQuestion = myQuestions[i].question;
      currentA = myQuestions[i].answers[0].a;
      currentB = myQuestions[i].answers[1].b;
      currentC = myQuestions[i].answers[2].c;
    }
  });
}

start.addEventListener("click", countdown);

function game() {}
