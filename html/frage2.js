document.getElementById("frage2Form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    // Überprüfung der Benutzerantwort und Berechnung der Punktzahl
    const selectedAnswer = document.querySelector('input[name="antwort"]:checked');
    let userScore = 0;
    if (selectedAnswer && selectedAnswer.value === "Weiß") {
        userScore += 5; // Korrekte Antwort erhält 5 Punkte
    }
    
    // Speichern der Benutzerantwort und der Punktzahl im Local Storage
    localStorage.setItem("frage2Antwort", selectedAnswer ? selectedAnswer.value : "");
    localStorage.setItem("frage2Punktzahl", userScore);
    
    // Weiterleitung zur Auswertungsseite
    window.location.href = "auswertung.html";
});
