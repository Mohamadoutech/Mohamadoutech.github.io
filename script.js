<script>
let voitures = JSON.parse(localStorage.getItem("voitures")) || [];
let container = document.getElementById("listeVoitures");

voitures.forEach(v => {
    let div = document.createElement("div");
    div.className = "car";
    div.innerHTML = `
        <h3>${v.marque} ${v.modele}</h3>
        <p>${v.annee} - ${v.prix} €</p>
    `;
    container.appendChild(div);
});
</script>

<script>
document.getElementById("formVente").addEventListener("submit", function(e) {
    e.preventDefault();

    let voiture = {
        marque: marque.value,
        modele: modele.value,
        annee: annee.value,
        prix: prix.value
    };

    let voitures = JSON.parse(localStorage.getItem("voitures")) || [];
    voitures.push(voiture);
    localStorage.setItem("voitures", JSON.stringify(voitures));
 alert("Voiture ajoutée !");
    this.reset();
});
</script>
