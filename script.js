document.getElementById("bet-form").addEventListener("submit", function(event) {
    event.preventDefault();

    // Récupérer les valeurs des champs
    const betName = document.getElementById("bet-name").value;
    const participants = document.getElementById("participants").value;
    const betDeadline = document.getElementById("bet-deadline").value;

    // Créer un nouvel élément de pari
    const betItem = document.createElement("li");
    betItem.innerHTML = `
        <strong>Pari :</strong> ${betName}<br>
        <strong>Participants :</strong> ${participants}<br>
        <strong>Date Limite :</strong> ${betDeadline}
    `;

    // Ajouter le pari à la liste
    document.getElementById("bet-items").appendChild(betItem);

    // Réinitialiser le formulaire
    document.getElementById("bet-form").reset();
});
