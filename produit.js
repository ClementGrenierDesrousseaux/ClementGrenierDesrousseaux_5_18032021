var request = new XMLHttpRequest();
request.open("GET", "http://localhost:3000/api/teddies");
request.send();

var position = window.location.href.indexOf('?');

request.onload = function() {
    var response = JSON.parse(this.response);
    if (position != -1) {
        var fin_url = window.location.href.substr(position + 1);
        for (let i = 0; i < 5; i++) {
            if (fin_url === i.toString()) {
                var prix_produit_teddy = document.createTextNode(response[i].price + " euros");
                var nom_produit_teddy = document.createTextNode(response[i].name);
                var image_produit_teddy = response[i].imageUrl;
                var desc_produit_teddy = document.createTextNode(response[i].description)
                document.getElementById("nom_produit").appendChild(nom_produit_teddy);
                document.getElementById("prix_produit").appendChild(prix_produit_teddy);
                document.getElementById("image_produit").setAttribute("src", image_produit_teddy);
                document.getElementById("desc_produit").appendChild(desc_produit_teddy);
                var nb_colors = response[i].colors;
                for (let j = 0; j < nb_colors.length; j++) {
                    var newOption = document.createElement("option");
                    var afficherCouleur = document.createTextNode(response[i].colors[j]);
                    document.getElementById("couleur").appendChild(newOption).setAttribute("id", "color" + j);
                    document.getElementById("color" + j).appendChild(afficherCouleur);
                }
            }
        }
    }
}

document.getElementById("btn_ajout_panier").onclick = function() {
    var newTr = document.createElement("tr");
    var newTd = document.createElement("td");
    var panierName = document.getElementById("nom_produit").textContent;
    var panierPrice = document.getElementById("prix_produit").textContent;
    var l = 0
    for (let k = 0; k < l; k++) {
        l++;
        document.getElementById("table").appendChild(newTr).setAttribute("id", "produit" + k);
        document.getElementById("produit" + k).appendChild(newTd).setAttribute("id", "nom" + k);
        document.getElementById("produit" + k).appendChild(newTd).setAttribute("id", "prix" + k);
        document.getElementById("nom" + k).appendChild(panierName);
        document.getElementById("nom" + k).appendChild(panierPrice);
    }
}