var nbLigne = 0
var tableau = JSON.parse(localStorage.getItem("panier"));
var priceTableau = [];

for (let i = 0; i < tableau.length; i++) {
    //Création des textNode
    var newName = document.createTextNode(tableau[i].name);
    var newPrice = document.createTextNode(tableau[i].price);
    var newCount = document.createTextNode(tableau[i].quantity);
    var priceLine = tableau[i].quantity * tableau[i].price;
    var totalPriceLine = document.createTextNode(priceLine + " euros");


    //Création des éléments
    var newTr = document.createElement("tr");
    document.querySelector("table").appendChild(newTr).setAttribute("id", "produit" + i);
    var newTd = document.createElement("td");
    document.getElementById("produit" + i).appendChild(newTd).setAttribute("id", "nom" + i);
    var newTd = document.createElement("td");
    document.getElementById("produit" + i).appendChild(newTd).setAttribute("id", "prix" + i);
    var newTd = document.createElement("td");
    document.getElementById("produit" + i).appendChild(newTd).setAttribute("id", "quantité" + i);
    var newTd = document.createElement("td");
    document.getElementById("produit" + i).appendChild(newTd).setAttribute("id", "totalPriceLine" + i);

    //Intégration des TextNode dans les éléments créés
    document.getElementById("nom" + i).appendChild(newName);
    document.getElementById("prix" + i).appendChild(newPrice);
    document.getElementById("quantité" + i).appendChild(newCount);
    document.getElementById("totalPriceLine" + i).appendChild(totalPriceLine);

    priceTableau.push(priceLine);


}

const reducer = (accumulator, currentValue) => accumulator + currentValue;
var totalPrice = document.createTextNode(priceTableau.reduce(reducer) + " euros")
document.getElementById("totalPrice").appendChild(totalPrice);












//Formulaire

class user {
    constructor(name, email, city, street, numStreet) {
        this.name = name;
        this.email = email;
        this.city = city;
        this.street = street;
        this.numStreet = numStreet;

    }
}

document.getElementById("confirmPanier").onclick = function() {
    userName = document.getElementById("name").value;
    userEmail = document.getElementById("email").value;
    userCity = document.getElementById("postal").value;
    userStreet = document.getElementById("street").value;
    userNumStreet = document.getElementById("numStreet").value;
    let myUser = new user(userName, userEmail, userCity, userStreet, userNumStreet);
    localStorage.setItem("client", JSON.stringify(myUser));
    window.location.href = "confirmation.html";
}