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
  {
    question: "What is 2+2?",
    answers: [
      { a: "2", answer: true },
      { b: "4", answer: false },
      { c: "5", answer: false },
    ],
  },
];

function countdown() {
  var i = 0;
  var timeLeft = 100;
  var timeInterval = setInterval(function () {
    timeLeft--;
    timerEl.textContent = timeLeft + " seconds";
    if (timeLeft <= 0) {
      clearInterval(timeInterval);
      alert("GAME OVER");
      currentQuestion = 0;
      currentA = 0;
      currentB = 0;
      currentC = 0;
      aAnswer = "true";
      bAnswer = "true";
      cAnswer = "true";
      questionEl.textContent = currentQuestion;
      aEl.textContent = currentA;
      bEl.textContent = currentB;
      cEl.textContent = currentC;
      return;
    }
  }, 1000);
  currentQuestion = myQuestions[i].question;
  currentA = myQuestions[i].answers[0].a;
  currentB = myQuestions[i].answers[1].b;
  currentC = myQuestions[i].answers[2].c;
  aAnswer = myQuestions[i].answers[0].answer;
  bAnswer = myQuestions[i].answers[1].answer;
  cAnswer = myQuestions[i].answers[2].answer;
  questionEl.textContent = currentQuestion;
  aEl.textContent = currentA;
  bEl.textContent = currentB;
  cEl.textContent = currentC;

  aEl.addEventListener("click", function () {
    if ((aAnswer = "false")) {
      timeLeft -= 10;
      timerEl.textContent = timeLeft + " seconds";
      i++;
      currentQuestion = myQuestions[i].question;
      currentA = myQuestions[i].answers[0].a;
      currentB = myQuestions[i].answers[1].b;
      currentC = myQuestions[i].answers[2].c;
      aAnswer = myQuestions[i].answers[0].answer;
      bAnswer = myQuestions[i].answers[1].answer;
      cAnswer = myQuestions[i].answers[2].answer;
      questionEl.textContent = currentQuestion;
      aEl.textContent = currentA;
      bEl.textContent = currentB;
      cEl.textContent = currentC;
    }
  });
  bEl.addEventListener("click", function () {
    if ((aAnswer = "false")) {
      timeLeft -= 10;
      timerEl.textContent = timeLeft + " seconds";
      i++;
      currentQuestion = myQuestions[i].question;
      currentA = myQuestions[i].answers[0].a;
      currentB = myQuestions[i].answers[1].b;
      currentC = myQuestions[i].answers[2].c;
      aAnswer = myQuestions[i].answers[0].answer;
      bAnswer = myQuestions[i].answers[1].answer;
      cAnswer = myQuestions[i].answers[2].answer;
      questionEl.textContent = currentQuestion;
      aEl.textContent = currentA;
      bEl.textContent = currentB;
      cEl.textContent = currentC;
    }
  });
  cEl.addEventListener("click", function () {
    if ((aAnswer = "false")) {
      timeLeft -= 10;
      timerEl.textContent = timeLeft + " seconds";
      i++;
      currentQuestion = myQuestions[i].question;
      currentA = myQuestions[i].answers[0].a;
      currentB = myQuestions[i].answers[1].b;
      currentC = myQuestions[i].answers[2].c;
      aAnswer = myQuestions[i].answers[0].answer;
      bAnswer = myQuestions[i].answers[1].answer;
      cAnswer = myQuestions[i].answers[2].answer;
      questionEl.textContent = currentQuestion;
      aEl.textContent = currentA;
      bEl.textContent = currentB;
      cEl.textContent = currentC;
    }
  });
}

start.addEventListener("click", countdown);
