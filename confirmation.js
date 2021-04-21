let order = JSON.parse(localStorage.getItem("validation"));
var texte = order[0]
document.getElementById("numSuivi").insertAdjacentHTML("beforeend", texte)
document.getElementById("montant").insertAdjacentHTML("beforeend", order[1] + " euros.")
localStorage.removeItem("panier");