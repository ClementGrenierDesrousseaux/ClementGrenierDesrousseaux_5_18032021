var nbLigne = 0
var tableau = JSON.parse(localStorage.getItem("panier"));
var priceTableau = [];


//Récupération du panier local storage + affichage
for (let i = 0; i < tableau.length; i++) {
    //Création des textNode
    var newName = document.createTextNode(tableau[i].name);
    var newPrice = document.createTextNode(tableau[i].price);
    var newColor = document.createTextNode(tableau[i].color);
    var newCount = document.createTextNode(tableau[i].quantity);
    var priceLine = tableau[i].quantity * tableau[i].price;
    var totalPriceLine = document.createTextNode(priceLine + " euros");


    //Création des éléments
    var newTr = document.createElement("tr");
    document.querySelector("table").appendChild(newTr).setAttribute("id", "produit" + i);
    var newTd = document.createElement("td");
    document.getElementById("produit" + i).appendChild(newTd).setAttribute("id", "nom" + i);
    var newTd = document.createElement("td");
    document.getElementById("produit" + i).appendChild(newTd).setAttribute("id", "couleur" + i);
    var newTd = document.createElement("td");
    document.getElementById("produit" + i).appendChild(newTd).setAttribute("id", "prix" + i);
    var newTd = document.createElement("td");
    document.getElementById("produit" + i).appendChild(newTd).setAttribute("id", "quantité" + i);
    var newTd = document.createElement("td");
    document.getElementById("produit" + i).appendChild(newTd).setAttribute("id", "totalPriceLine" + i);

    //Intégration des TextNode dans les éléments créés
    document.getElementById("nom" + i).appendChild(newName);
    document.getElementById("couleur" + i).appendChild(newColor);
    document.getElementById("prix" + i).appendChild(newPrice);
    document.getElementById("quantité" + i).appendChild(newCount);
    document.getElementById("totalPriceLine" + i).appendChild(totalPriceLine);

    priceTableau.push(priceLine);


}

const reducer = (accumulator, currentValue) => accumulator + currentValue;
var totalPrice = priceTableau.reduce(reducer);
var nodeTotalPrice = document.createTextNode(totalPrice + " euros")
document.getElementById("totalPrice").appendChild(nodeTotalPrice);












//Formulaire de contact 

class user {
    constructor(name, email, city, street, numStreet) {
        this.name = name;
        this.email = email;
        this.city = city;
        this.street = street;
        this.numStreet = numStreet;

    }
}

/*document.getElementById("confirmPanier").onclick = function() {
    userName = document.getElementById("name").value;
    userEmail = document.getElementById("email").value;
    userCity = document.getElementById("postal").value;
    userStreet = document.getElementById("street").value;
    userNumStreet = document.getElementById("numStreet").value;
    let myUser = new user(userName, userEmail, userCity, userStreet, userNumStreet);
    localStorage.setItem("client", JSON.stringify(myUser));
    window.location.href = "confirmation.html";
}*/


//Formulaire de paiement
/*var myInput = document.getElementById("name_card")
myInput.addEventListener('input', function(e) {
    var value = e.target.value;
    if (value.startsWith('Hello ')) {
        isValid = true;
        myInput.style.backgroundColor = "green";
    } else {
        isValid = false;
        myInput.style.backgroundColor = "red";
    }
});*/
/*document.getElementById("name_card").addEventListener("change", function() {
    var chaine = document.getElementById("name_card").value
    var tableau = []
    tableau.push(chaine.substr(0, 4))
    tableau.push(chaine.substr(4, 4))
    tableau.push(chaine.substr(8, 4))
    tableau.push(chaine.substr(12, 4))
    console.log(tableau)
    console.log(tableau[0] + " " + tableau[1] + " " + tableau[2] + " " + tableau[3])
})*/

/*const input = document.getElementById("num_card");
const log = document.getElementById('log');

input.addEventListener('change', updateValue);

function updateValue() {
    var chaine = document.getElementById("num_card").value;
    var tableau = []
    tableau.push(chaine.substr(0, 4))
    tableau.push(chaine.substr(4, 4))
    tableau.push(chaine.substr(8, 4))
    tableau.push(chaine.substr(12, 4))
    console.log(tableau[0] + " " + tableau[1] + " " + tableau[2] + " " + tableau[3])
    document.getElementById("num_card").value = tableau[0] + " " + tableau[1] + " " + tableau[2] + " " + tableau[3]
}*/

/*function isValid(value) {
    return /^[0-9]$/.test(value);
}*/






//Confirmation de la commande 




document.getElementById("confirmPanier").onclick = function() {
    var panier = JSON.parse(localStorage.getItem("panier"));
    var produit = [];
    panier.forEach(element => {
        for (let i = 0; i < element.quantity; i++) {
            produit.push(element.id);
        }
    });

    var prenom = document.getElementById("firstName").value;
    var nom = document.getElementById("lastName").value;
    var adresse = document.getElementById("address").value;
    var ville = document.getElementById("city").value;
    var mail = document.getElementById("email").value;

    if (prenom == "" || nom == "" || adresse == "" || ville == "" || mail == "") {
        alert("Veuillez remplir tous les champs");
    } else if (!document.getElementById("email").checkValidity()) {
        alert(document.getElementById("email").validationMessage)
    } else {
        const url = 'http://localhost:3000/api/teddies/order';

        let data = {
            contact: {
                firstName: document.getElementById("firstName").value,
                lastName: document.getElementById("lastName").value,
                address: document.getElementById("address").value,
                city: document.getElementById("city").value,
                email: document.getElementById("email").value
            },
            products: produit
        }

        var request = new Request(url, {
            method: "POST",
            body: JSON.stringify(data),
            headers: { "Content-type": "application/json; charset=UTF-8" }
        });

        fetch(request)
            .then(function(response) {
                var myJSON_promise = response.json();
                myJSON_promise.then(function(myJSON) {
                    //console.log(myJSON.orderId)
                    var validation = [myJSON.orderId, totalPrice]
                    localStorage.setItem("validation", JSON.stringify(validation)) //Enregistre l'orderID dans un localStorage
                })
            })
            //.then(setTimeout(function() { window.location.href = "confirmation.html" }, 1000)) //Ouvre la page de confirmation après 1 seconde
    }



}