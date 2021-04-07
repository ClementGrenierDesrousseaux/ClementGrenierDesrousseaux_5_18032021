var nbLigne = 0

function newTable() {
    var nbLigne = 0
    for (let i = 1; i <= localStorage.length; i++) {
        var monPanierJSON = localStorage.getItem("panier" + i);
        var monPanier = JSON.parse(monPanierJSON);


        //Création des textNode
        var newName = document.createTextNode(monPanier.nom);
        var newPrice = document.createTextNode(monPanier.prix);
        var newCount = document.createTextNode(monPanier.quantité);
        var newID = document.createTextNode(monPanier.id);
        var numLigne = document.createTextNode(i);


        //Création des éléments
        var newTr = document.createElement("tr");
        document.querySelector("table").appendChild(newTr).setAttribute("id", "produit" + i);
        var newTd = document.createElement("td");
        document.getElementById("produit" + i).appendChild(newTd).setAttribute("id", "numLigne" + i);
        var newTd = document.createElement("td");
        document.getElementById("produit" + i).appendChild(newTd).setAttribute("id", "nom" + i);
        var newTd = document.createElement("td");
        document.getElementById("produit" + i).appendChild(newTd).setAttribute("id", "prix" + i);
        var newTd = document.createElement("td");
        document.getElementById("produit" + i).appendChild(newTd).setAttribute("id", "id" + i);
        var newTd = document.createElement("td");
        document.getElementById("produit" + i).appendChild(newTd).setAttribute("id", "quantité" + i);

        //Intégration des TextNode dans les éléments créés
        document.getElementById("numLigne" + i).appendChild(numLigne);
        document.getElementById("nom" + i).appendChild(newName);
        document.getElementById("prix" + i).appendChild(newPrice);
        document.getElementById("id" + i).appendChild(newID);
        document.getElementById("quantité" + i).appendChild(newCount);

        if (document.getElementById("id" + i).textContent === monPanier.id) {
            console.log("Ah ! Vous avez des article identiques");





        }


    }



}

newTable();

console.log(document.getElementById("nom1").textContent);