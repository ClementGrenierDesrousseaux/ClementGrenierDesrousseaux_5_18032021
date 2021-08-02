var tableau = JSON.parse(localStorage.getItem("validation"));

var numCommande = document.createTextNode(tableau[0]);
document.getElementById("numCommande").appendChild(numCommande);

localStorage.removeItem("panier");
localStorage.removeItem("validation");