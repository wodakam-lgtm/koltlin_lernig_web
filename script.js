const cards = [
  {
    question: "Czym jest Kotlin?",
    answer: "Kotlin to nowoczesny język programowania działający m.in. na JVM."
  },
  {
    question: "Jak tworzymy zmienną stałą w Kotlinie?",
    answer: "Za pomocą słowa kluczowego val."
  },
  {
    question: "Jak tworzymy zmienną, której wartość można zmieniać?",
    answer: "Za pomocą słowa kluczowego var."
  },
  {
    question: "Jak wygląda funkcja w Kotlinie?",
    answer: "fun nazwaFunkcji() { ... }"
  },
  {
    question: "Co zwraca funkcja return?",
    answer: "Zwraca wynik działania funkcji."
  }
];

let currentCard = 0;
let showingAnswer = false;

function showCard() {
  const cardText = document.getElementById("cardText");
  const counter = document.getElementById("counter");

  if (showingAnswer) {
    cardText.textContent = cards[currentCard].answer;
  } else {
    cardText.textContent = cards[currentCard].question;
  }

  counter.textContent = `Fiszka ${currentCard + 1} z ${cards.length}`;
}

function flipCard() {
  showingAnswer = !showingAnswer;
  showCard();
}

function nextCard() {
  currentCard++;

  if (currentCard >= cards.length) {
    currentCard = 0;
  }

  showingAnswer = false;
  showCard();
}

function prevCard() {
  currentCard--;

  if (currentCard < 0) {
    currentCard = cards.length - 1;
  }

  showingAnswer = false;
  showCard();
}

showCard();