// Funkcja symulująca zliczenie punktów
function finishQuiz() {
    // Tutaj w prawdziwym kodzie zliczałbyś punkty z wybranych odpowiedzi
    const zdobytePunkty = Math.floor(Math.random() * 11); // Generuje losowo 0-10 na potrzeby prezentacji
    const maxPunktow = 10;

    const titleEl = document.getElementById('feedbackTitle');
    const msgEl = document.getElementById('feedbackMessage');
    const scoreEl = document.getElementById('userScore');
    
    // Obliczanie procentowe dla lepszego feedbacku wizualnego
    const procent = (zdobytePunkty / maxPunktow) * 100;

    if (procent === 100) {
        titleEl.textContent = "Perfekcyjnie! 🏆";
        msgEl.textContent = "Jesteś absolutnym mistrzem!";
        scoreEl.style.color = "#1dd1a1"; // zielony
    } else if (procent >= 70) {
        titleEl.textContent = "Świetny wynik! 👏";
        msgEl.textContent = "Poszło Ci naprawdę dobrze.";
        scoreEl.style.color = "#1dd1a1"; // zielony
    } else if (procent >= 40) {
        titleEl.textContent = "Nieźle! 👍";
        msgEl.textContent = "Dobra robota, ale stać Cię na więcej.";
        scoreEl.style.color = "#f1c40f"; // żółty
    } else {
        titleEl.textContent = "Spróbuj jeszcze raz! 🔄";
        msgEl.textContent = "Musisz jeszcze trochę poćwiczyć.";
        scoreEl.style.color = "#ff6b6b"; // czerwony
    }

    // Wstrzyknięcie wartości liczbowych do DOM
    scoreEl.textContent = zdobytePunkty;
    document.getElementById('maxScore').textContent = maxPunktow;

    // Klasa .show zmienia stan transform: translateY(100%) na translateY(0)
    document.getElementById('quizFooter').classList.add('show');
}

// Funkcja resetująca quiz i chowająca footer
function restartQuiz() {
    document.getElementById('quizFooter').classList.remove('show');
    alert("Quiz zresetowany! Możesz rozwiązywać od nowa.");
}