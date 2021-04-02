var monPanierJSON = localStorage.getItem("panier");
var monPanier = JSON.parse(monPanierJSON);

console.log("Voici mon panier : " + monPanier.nom + ", et cela me coûte " + monPanier.prix + " euros");


var newName = document.createTextNode(monPanier.nom);
var newPrice = document.createTextNode(monPanier.prix);

console.log(Object.keys(monPanier).length);

function newTable() {
    var newTr = document.createElement("tr");
    document.querySelector("table").appendChild(newTr).setAttribute("id", "produit1");
    var newTd = document.createElement("td");
    document.getElementById("produit1").appendChild(newTd).setAttribute("id", "nom1");
    var newTd = document.createElement("td");
    document.getElementById("produit1").appendChild(newTd).setAttribute("id", "prix1");
    document.getElementById("nom1").appendChild(newName);
    document.getElementById("prix1").appendChild(newPrice);

}

newTable();