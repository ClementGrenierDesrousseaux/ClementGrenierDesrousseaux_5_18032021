let order = JSON.parse(localStorage.getItem("validation"));
var texte = order[0] + " pour un montant total de : " + order[1] + " euros"
document.getElementById("numSuivi").insertAdjacentHTML("beforeend", texte)

localStorage.removeItem("panier");