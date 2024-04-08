document.getElementById("frage1Form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    // Überprüfung der Benutzerantwort und Berechnung der Punktzahl
    const selectedAnswer = document.querySelector('input[name="antwort"]:checked');
    let userScore = 0;
    if (selectedAnswer && selectedAnswer.value === "3") {
        userScore += 5; // Korrekte Antwort erhält 5 Punkte
    }
    
    // Speichern der Benutzerantwort und der Punktzahl im Local Storage
    localStorage.setItem("frage1Antwort", selectedAnswer ? selectedAnswer.value : "");
    localStorage.setItem("frage1Punktzahl", userScore);
    
    // Weiterleitung zur nächsten Frage
    window.location.href = "frage2.html";
});
