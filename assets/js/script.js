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
aAnswer = myQuestions[0].answers[0].answer;
bAnswer = myQuestions[0].answers[1].answer;
cAnswer = myQuestions[0].answers[2].answer;

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
  aEl.addEventListener("click", function () {
    if ((aAnswer = "false")) {
      timeLeft -= 10;
      timerEl.textContent = timeLeft + " seconds";
    }
    currentQuestion = myQuestions[1].question;
    currentA = myQuestions[1].answers[0].a;
    currentB = myQuestions[1].answers[1].b;
    currentC = myQuestions[1].answers[2].c;
    aAnswer = myQuestions[1].answers[0].answer;
    bAnswer = myQuestions[1].answers[1].answer;
    cAnswer = myQuestions[1].answers[2].answer;
    questionEl.textContent = currentQuestion;
    aEl.textContent = currentA;
    bEl.textContent = currentB;
    cEl.textContent = currentC;
  });
}

start.addEventListener("click", countdown);

// function newQuestion(event) {
