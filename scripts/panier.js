var tableau = JSON.parse(localStorage.getItem("panier"));
var prixTotal = 0;

function separator(numb) {
    var str = numb.toString().split(".");
    str[0] = str[0].replace(/\B(?=([0-9]{2}$)+(?!\d))/g, ",");
    return str.join(".");
}

function creationElement(element) {
    var newDiv = document.createElement("div");
    document.getElementById("affichageTeddies").appendChild(newDiv).setAttribute("id", "globalTeddy" + element.id + element.couleur);
    document.getElementById("globalTeddy" + element.id + element.couleur).setAttribute("class", "globalTeddy");
    var newP = document.createElement("p");
    document.getElementById("globalTeddy" + element.id + element.couleur).appendChild(newP).setAttribute("id", "name" + element.id + element.couleur);
    document.getElementById("name" + element.id + element.couleur).setAttribute("class", "name");
    var newDiv = document.createElement("div");
    document.getElementById("globalTeddy" + element.id + element.couleur).appendChild(newDiv).setAttribute("id", "couleur_quantity" + element.id + element.couleur);
    document.getElementById("couleur_quantity" + element.id + element.couleur).setAttribute("class", "couleur_quantity");
    var newP = document.createElement("p");
    document.getElementById("couleur_quantity" + element.id + element.couleur).appendChild(newP).setAttribute("id", "couleur" + element.id + element.couleur);
    document.getElementById("couleur" + element.id + element.couleur).setAttribute("class", "couleur");
    var newP = document.createElement("p");
    document.getElementById("couleur_quantity" + element.id + element.couleur).appendChild(newP).setAttribute("id", "quantity" + element.id + element.couleur);
    document.getElementById("quantity" + element.id + element.couleur).setAttribute("class", "quantity");
    var newP = document.createElement("p");
    document.getElementById("globalTeddy" + element.id + element.couleur).appendChild(newP).setAttribute("id", "subtotal" + element.id + element.couleur);
    document.getElementById("subtotal" + element.id + element.couleur).setAttribute("class", "subtotal");
}

function ajoutTexte(element) {
    var name = document.createTextNode(element.nom);
    document.getElementById("name" + element.id + element.couleur).appendChild(name);
    var couleur = document.createTextNode(element.couleur);
    document.getElementById("couleur" + element.id + element.couleur).appendChild(couleur);
    var quantity = document.createTextNode("Quantité : " + element.quantity);
    document.getElementById("quantity" + element.id + element.couleur).appendChild(quantity);

}

function affichagePanier() {
    tableau.forEach(element => {
        var prixTeddy = element.prix * element.quantity;
        prixTotal = prixTotal + prixTeddy;
        creationElement(element);
        ajoutTexte(element);
        var subtotal = document.createTextNode("Sous-total : " + separator(prixTeddy) + "€");
        document.getElementById("subtotal" + element.id + element.couleur).appendChild(subtotal);
    });
    var totalPrice = document.createTextNode("Montant total de la commande : " + separator(prixTotal) + "€");
    document.getElementById("montantTotal").appendChild(totalPrice);
}

affichagePanier();

//Confirmation de la commande 
document.getElementById("confirmPanier").onclick = function() {

    if (document.getElementById("firstName").value == "" || document.getElementById("lastName").value == "" || document.getElementById("address").value == "" || document.getElementById("city").value == "" || document.getElementById("email").value == "") {
        alert("Veuillez remplir tous les champs");
    } else {
        var produit = []; //Crée un tableau produit id pour envoyer au back-end
        tableau.forEach(element => {
            for (let i = 0; i < element.quantity; i++) {
                produit.push(element.id);
            }
        });

        //Création de la donnée à envoyer au back-end
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

        //Requête POST pour envoyer la donnée au back-end
        var request = new Request(url, {
            method: "POST",
            body: JSON.stringify(data),
            headers: { "Content-type": "application/json; charset=UTF-8" }
        });

        fetch(request)
            .then(response => response.json())
            .then(function(response) {
                var validation = [response.orderId]
                localStorage.setItem("validation", JSON.stringify(validation)); //Enregistre l'orderID dans un localStorage
                window.location.href = "confirmation.html"
            })
    }



    //.then(setTimeout(function() { window.location.href = "confirmation.html" }, 1000)) //Ouvre la page de confirmation après 1 seconde
}

document.getElementById("confirmPanier").addEventListener("click", function(event) {
    event.preventDefault();
}, false);