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
                //alert(nb_colors);
                for (let j = 0; j < nb_colors.length; j++) {
                    var newInput = document.createElement("input");
                    var newLabel = document.createElement("label");
                    var newBr = document.createElement("br");
                    var afficherCouleur = document.createTextNode(response[i].colors[j]);
                    document.getElementById("couleur_produit").appendChild(newInput).setAttribute("id", "color" + j);
                    document.getElementById("color" + j).setAttribute("type", "radio");
                    document.getElementById("color" + j).setAttribute("name", "color")
                    document.getElementById("couleur_produit").appendChild(newLabel).setAttribute("id", "label" + j);
                    document.getElementById("label" + j).setAttribute("for", "color" + j);
                    document.getElementById("label" + j).appendChild(afficherCouleur);
                    document.getElementById("couleur_produit").appendChild(newBr);




                }











            }
        }
    }
}