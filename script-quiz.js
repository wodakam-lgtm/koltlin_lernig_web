const questions = [
  {
    question: "Kto stworzył język Kotlin?",
    answers: [
      { text: "Google", correct: false },
      { text: "JetBrains", correct: true },
      { text: "Microsoft", correct: false },
      { text: "Oracle", correct: false }
    ]
  },
  {
    question: "Które rozszerzenie mają pliki Kotlin?",
    answers: [
      { text: ".java", correct: false },
      { text: ".kt", correct: true },
      { text: ".js", correct: false },
      { text: ".kotlin", correct: false }
    ]
  },
  {
    question: "Do czego najczęściej używa się Kotlina?",
    answers: [
      { text: "Tworzenia aplikacji Android", correct: true },
      { text: "Projektowania stron WWW", correct: false },
      { text: "Edycji grafiki", correct: false },
      { text: "Tworzenia baz danych", correct: false }
    ]
  }
];

const questionElement = document.getElementById("question");
const answersElement = document.getElementById("answers");
const nextButton = document.getElementById("next-btn");
const resultBox = document.getElementById("result");
const quizBox = document.getElementById("quiz");
const scoreText = document.getElementById("score");

let currentQuestion = 0;
let score = 0;

function showQuestion() {
  resetState();

  let q = questions[currentQuestion];
  questionElement.innerText = q.question;

  q.answers.forEach(answer => {
    const button = document.createElement("button");
    button.innerText = answer.text;
    button.classList.add("answer-btn");

    button.addEventListener("click", () => selectAnswer(button, answer.correct));

    answersElement.appendChild(button);
  });
}

function resetState() {
  nextButton.style.display = "none";
  answersElement.innerHTML = "";
}

function selectAnswer(button, correct) {
  const buttons = document.querySelectorAll(".answer-btn");

  buttons.forEach(btn => btn.disabled = true);

  if (correct) {
    button.classList.add("correct");
    score++;
  } else {
    button.classList.add("wrong");
  }

  nextButton.style.display = "block";
}

nextButton.addEventListener("click", () => {
  currentQuestion++;

  if (currentQuestion < questions.length) {
    showQuestion();
  } else {
    showResult();
  }
});

function showResult() {
  quizBox.classList.add("hidden");
  resultBox.classList.remove("hidden");

  scoreText.innerText = `${score} / ${questions.length}`;
}

showQuestion();