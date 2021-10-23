var myQuestions = [
  {
    question: "What is JavaScript most commonly used for?",
    answers: [
      { a: "Making shoes", answer: "false" },
      { b: "Making dynamic webpages", answer: "true" },
      { c: "Baking cakes", answer: "false" },
    ],
  },
  {
    question: "Which of the following is true about JavaScript?",
    answers: [
      { a: "It is right-oriented", answer: "false" },
      { b: "It is object-oriented", answer: "true" },
      { c: "It is not oriented", answer: "false" },
    ],
  },
  {
    question:
      "Which built-in method returns the character at the specified index?",
    answers: [
      { a: "characterAt()", answer: "false" },
      { b: "charAt()", answer: "true" },
      { c: "getChar()", answer: "false" },
    ],
  },
  {
    question:
      "Which of the following function of Boolean object returns the primitive value of the Boolean object?",
    answers: [
      { a: "valueOf()", answer: "true" },
      { b: "toString()", answer: "false" },
      { c: "toValue()", answer: "false" },
    ],
  },
  {
    question:
      "Which of the following function of String object returns the characters in a string between two indexes into the string?",
    answers: [
      { a: "slice()", answer: "false" },
      { b: "split()", answer: "false" },
      { c: "substring()", answer: "true" },
    ],
  },
];

var timerEl = document.querySelector("#time");
var questionEl = document.querySelector("#question");
var aEl = document.querySelector("#a");
var bEl = document.querySelector("#b");
var cEl = document.querySelector("#c");
var scoresEl = document.querySelector("#scores");

var i = 0;
function play() {
  questionEl.textContent = myQuestions[i].question;
  aEl.textContent = myQuestions[i].answers[0].a;
  bEl.textContent = myQuestions[i].answers[1].b;
  cEl.textContent = myQuestions[i].answers[2].c;
  aAnswer = myQuestions[i].answers[0].answer;
  bAnswer = myQuestions[i].answers[1].answer;
  cAnswer = myQuestions[i].answers[2].answer;
}

function countdown() {
  play();
  var timeLeft = 30;
  var timeInterval = setInterval(function () {
    timeLeft--;
    timerEl.textContent = timeLeft + " seconds";
    if (timeLeft <= 0) {
      clearInterval(timeInterval);
      alert("GAME OVER");
      return;
    }
  }, 1000);

  aEl.addEventListener("click", function () {
    if (aAnswer == "false") {
      if (timeLeft <= 5) {
        timeLeft = 0;
        timerEl.textContent = timeLeft + " seconds";
        return;
      }
      timeLeft = timeLeft - 5;
      timerEl.textContent = timeLeft + " seconds";
    }
    if (i < myQuestions.length) {
      i = i + 1;
      play();
    } else {
      var initials = prompt(
        "Your score is " + timeLeft + "! Please enter your initials"
      );
      scoresEl.textContent = "initials:" + initials + "score: " + timeLeft;
      localStorage.setItem("initials", initials);
      localStorage.setItem("score", timeLeft);
    }
  });
  bEl.addEventListener("click", function () {
    if (bAnswer == "false") {
      if (timeLeft <= 5) {
        timeLeft = 0;
        timerEl.textContent = timeLeft + " seconds";
        return;
      }
      timeLeft = timeLeft - 5;
      timerEl.textContent = timeLeft + " seconds";
    }
    if (i < myQuestions.length) {
      i = i + 1;
      play();
    } else {
      var initials = prompt(
        "Your score is " + timeLeft + "! Please enter your initials"
      );
      scoresEl.textContent = "initials:" + initials + "score: " + timeLeft;
      localStorage.setItem("initials", initials);
      localStorage.setItem("score", timeLeft);
    }
  });
  cEl.addEventListener("click", function () {
    if (cAnswer == "false") {
      if (timeLeft <= 5) {
        timeLeft = 0;
        timerEl.textContent = timeLeft + " seconds";
        return;
      }
      timeLeft = timeLeft - 5;
      timerEl.textContent = timeLeft + " seconds";
    }
    if (i < myQuestions.length) {
      i = i + 1;
      play();
    } else {
      var initials = prompt(
        "Your score is " + timeLeft + "! Please enter your initials"
      );
      scoresEl.textContent = "initials:" + initials + "   score: " + timeLeft;
      localStorage.setItem("initials", initials);
      localStorage.setItem("score", timeLeft);
    }
  });
}

var initials = localStorage.getItem("initials");
var score = localStorage.getItem("score");
if (initials == null) {
  initials == "";
}
if (score == null) {
  score == "";
}
scoresEl.textContent = "Initials:" + initials + "          Score: " + score;

start.addEventListener("click", countdown);
