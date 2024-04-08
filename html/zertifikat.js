document.addEventListener("DOMContentLoaded", function() {
    // Benutzerpunktzahlen aus dem Local Storage abrufen
    const punktzahlFrage1 = parseInt(localStorage.getItem("frage1Punktzahl"));
    const punktzahlFrage2 = parseInt(localStorage.getItem("frage2Punktzahl"));

    // Punktzahlen zusammenzählen
    const gesamtPunktzahl = punktzahlFrage1 + punktzahlFrage2;

    // Zertifikat-HTML generieren
    let zertifikatHTML = '';
    if (gesamtPunktzahl >= 10) {
        zertifikatHTML = `
            <h2>Zertifikat der Teilnahme</h2>
            <p>Gesamtpunktzahl: <strong>${gesamtPunktzahl}</strong></p>
            <!-- Weitere Details hinzufügen, falls erforderlich -->
        `;
    } else {
        zertifikatHTML = `
            <p>Du hast nicht genug Punkte, um das Zertifikat zu erhalten.</p>
            <!-- Hier kannst du zusätzliche Informationen oder Anweisungen anzeigen -->
        `;
    }

    // Zertifikat anzeigen
    document.getElementById("zertifikat").innerHTML = zertifikatHTML;
});
