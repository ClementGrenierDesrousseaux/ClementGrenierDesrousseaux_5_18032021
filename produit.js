var position = window.location.href.indexOf('?');
var idTeddy = $_GET('id');

function $_GET(param) { //Permet de récupérer l'id dans l'URL
    var vars = {};
    window.location.href.replace(location.hash, '').replace(
        /[?&]+([^=&]+)=?([^&]*)?/gi, // regexp
        function(m, key, value) { // callback
            vars[key] = value !== undefined ? value : '';
        }
    );

    if (param) {
        return vars[param] ? vars[param] : null;
    }
    return vars;
}

var request = fetch("http://localhost:3000/api/teddies/" + idTeddy);

fetch("http://localhost:3000/api/teddies/" + idTeddy) //Permet d'afficher les informations du teddy selon l'id de l'URL
    .then(function(response) {
        var myJSON_promise = response.json();
        myJSON_promise.then(function(myJSON) {
            var prix_produit_teddy = document.createTextNode(myJSON.price + " euros");
            var nom_produit_teddy = document.createTextNode(myJSON.name);
            var image_produit_teddy = myJSON.imageUrl;
            var desc_produit_teddy = document.createTextNode(myJSON.description)
            document.getElementById("nom_produit").appendChild(nom_produit_teddy);
            document.getElementById("prix_produit").appendChild(prix_produit_teddy);
            document.getElementById("image_produit").setAttribute("src", image_produit_teddy);
            document.getElementById("desc_produit").appendChild(desc_produit_teddy);

            var nb_colors = myJSON.colors;
            for (let j = 0; j < nb_colors.length; j++) { //Affiche le nombre de couleurs selon l'API
                var newOption = document.createElement("option");
                var afficherCouleur = document.createTextNode(myJSON.colors[j]);
                document.getElementById("couleur").appendChild(newOption).setAttribute("id", "color" + j);
                document.getElementById("color" + j).setAttribute("value", j)
                document.getElementById("color" + j).appendChild(afficherCouleur);
            }


        })
    })


var selectElem = document.getElementById('couleur');
selectElem.addEventListener('change', function() {
    var index = selectElem.value;
    console.log(index)
})



document.getElementById("effacerLocalStorage").onclick = function() {
    localStorage.clear();
}
document.getElementById("btn_ajout_panier").onclick = function() {
    var teddyCouleur = document.getElementById('couleur').value;
    if (teddyCouleur == "defaut") {
        alert("Veuillez choisir une couleur !")
    } else {
        fetch("http://localhost:3000/api/teddies/" + idTeddy)
            .then(function(response) {
                var myJSON_promise = response.json();
                myJSON_promise.then(function(myJSON) {
                    class Panier {
                        constructor(name, price, id, color, quantity, img) {
                            this.name = name;
                            this.price = price;
                            this.id = id;
                            this.color = color;
                            this.quantity = quantity;
                            this.img = img
                        }
                    }



                    var tableau = []
                    tableau = JSON.parse(localStorage.getItem("panier")) || [];
                    var nouvelArticle = new Panier(myJSON.name, myJSON.price, myJSON._id, myJSON.colors[teddyCouleur], 1, myJSON.imageUrl);
                    var ajoutArticle = true

                    tableau.forEach(element => {
                        if (element.id == nouvelArticle.id && element.color == nouvelArticle.color) {
                            ajoutArticle = false;
                            element.quantity++;
                            localStorage.setItem("panier", JSON.stringify(tableau));
                        }
                    });
                    if (ajoutArticle) {
                        tableau.push(nouvelArticle);
                        localStorage.setItem("panier", JSON.stringify(tableau));
                    }
                })
            })
    }

}