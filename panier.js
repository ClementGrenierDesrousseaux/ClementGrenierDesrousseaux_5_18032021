var tableau = JSON.parse(localStorage.getItem("panier")); //Récupération du localstorage panier
var priceTableau = [];


//Récupération du panier local storage + affichage
for (let i = 0; i < tableau.length; i++) {

    //Création des textNode
    var newName = document.createTextNode(tableau[i].name);
    var newPrice = document.createTextNode(tableau[i].price);
    var newColor = document.createTextNode(tableau[i].color);
    var newCount = document.createTextNode(tableau[i].quantity);
    var priceLine = tableau[i].quantity * tableau[i].price;
    var newSupp = document.createTextNode("Supprimer");
    var totalPriceLine = document.createTextNode(priceLine + " euros");


    //Création des éléments
    var newFig = document.createElement("figure");
    document.getElementById("panier").appendChild(newFig).setAttribute("id", "produit" + i);
    document.getElementById("produit" + i).setAttribute("class", "figure_panier");
    var newImg = document.createElement("img");
    document.getElementById("produit" + i).appendChild(newImg).setAttribute("id", "image" + i);
    var newFigCap = document.createElement("figcaption");
    document.getElementById("produit" + i).appendChild(newFigCap).setAttribute("id", "figcap" + i);
    var newDiv = document.createElement("div");
    document.getElementById("figcap" + i).appendChild(newDiv).setAttribute("id", "nom_prix" + i)
    document.getElementById("nom_prix" + i).setAttribute("class", "nom_prix");
    var newP = document.createElement("p");
    document.getElementById("nom_prix" + i).appendChild(newP).setAttribute("id", "nom" + i);
    var newP = document.createElement("p");
    document.getElementById("nom_prix" + i).appendChild(newP).setAttribute("id", "prix" + i);
    var newP = document.createElement("p");
    document.getElementById("figcap" + i).appendChild(newP).setAttribute("id", "couleur" + i);
    var newDiv = document.createElement("div");
    document.getElementById("figcap" + i).appendChild(newDiv).setAttribute("id", "qté_supp" + i)
    document.getElementById("qté_supp" + i).setAttribute("class", "qté_supp");
    var newP = document.createElement("p");
    document.getElementById("qté_supp" + i).appendChild(newP).setAttribute("id", "quantité" + i);
    var newP = document.createElement("p");
    document.getElementById("qté_supp" + i).appendChild(newP).setAttribute("id", "supprimer" + i);

    //Intégration des TextNode dans les éléments créés
    document.getElementById("nom" + i).appendChild(newName);
    document.getElementById("couleur" + i).appendChild(newColor);
    document.getElementById("prix" + i).appendChild(newPrice);
    document.getElementById("quantité" + i).appendChild(newCount);
    document.getElementById("supprimer" + i).appendChild(newSupp);
    document.getElementById("image" + i).setAttribute("src", tableau[i].img);

    priceTableau.push(priceLine); //Ajout du prix d'un teddy selon sa quantité dans un tableau prix total


}

//Somme du tableau prix total
const reducer = (accumulator, currentValue) => accumulator + currentValue;
var totalPrice = priceTableau.reduce(reducer);
var nodeTotalPrice = document.createTextNode(totalPrice + " euros")
document.getElementById("montantTotal").insertAdjacentHTML("beforeend", "<strong>" + totalPrice + " euros <strong/>")



//Confirmation de la commande 
document.getElementById("confirmPanier").onclick = function() {
    var panier = JSON.parse(localStorage.getItem("panier"));
    var produit = []; //Crée un tableau produit id pour envoyer au back-end
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

    if (prenom == "" || nom == "" || adresse == "" || ville == "" || mail == "") { //Si les champs sont vides, un message apparait
        alert("Veuillez remplir tous les champs");
    } else if (!document.getElementById("email").checkValidity()) {
        alert(document.getElementById("email").validationMessage) //Si le champs email n'est pas valide, un message apparait
    } else {
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
            .then(function(response) {
                var myJSON_promise = response.json();
                myJSON_promise.then(function(myJSON) {
                    var validation = [myJSON.orderId, totalPrice]
                    localStorage.setItem("validation", JSON.stringify(validation)) //Enregistre l'orderID dans un localStorage
                })
            })
            .then(setTimeout(function() { window.location.href = "confirmation.html" }, 1000)) //Ouvre la page de confirmation après 1 seconde
    }
}











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