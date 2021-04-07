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
                document.getElementById("color" + j).appendChild(afficherCouleur);
            }

        })
    })


//Récupération de la couleur choisie
/*document.getElementById("couleur").onclick = function() {
    console.log(document.getElementById("couleur").value);
}*/









//Ajout dans le panier sans gérer la quantité

document.getElementById("btn_ajout_panier").onclick = function() {
    fetch("http://localhost:3000/api/teddies/" + idTeddy)
        .then(function(response) {
            var myJSON_promise = response.json();
            myJSON_promise.then(function(myJSON) {
                var numPanier = localStorage.length + 1; //création num du panier

                var panier = new Object(); //création objet
                panier.nom = myJSON.name;
                panier.prix = myJSON.price;
                panier.id = myJSON._id;
                panier.quantité = 1;


                let panierString = JSON.stringify(panier); //le panier passe en JSON
                localStorage.setItem("panier" + numPanier, panierString); //on enregistre le panier dans local storage
            })
        })
}



//ajout dans le panier avec gestion de la quantité
/*document.getElementById("btn_ajout_panier").onclick = function() {
    fetch("http://localhost:3000/api/teddies/" + idTeddy)
        .then(function(response) {
            var myJSON_promise = response.json();
            myJSON_promise.then(function(myJSON) {
                var numPanier = localStorage.length + 1; //création num du panier
                var panier = new Object(); //création objet
                panier.nom = myJSON.name;
                panier.prix = myJSON.price;
                panier.id = myJSON._id;
                panier.quantité = 1;

                for (let i = 0; i <= localStorage.length; i++) {
                    if (JSON.stringify(panier) === localStorage.getItem("panier" + i)) {
                        var monPanierJSON = localStorage.getItem("panier" + i);
                        var monPanier = JSON.parse(monPanierJSON);
                        panier.quantité = 3;
                        let panierString = JSON.stringify(panier); //le panier passe en JSON
                        localStorage.setItem("panier" + numPanier, panierString); //on enregistre le panier dans local storage

                    } else {
                        let panierString = JSON.stringify(panier); //le panier passe en JSON
                        localStorage.setItem("panier" + numPanier, panierString); //on enregistre le panier dans local storage
                    }

                }


            })
        })
}*/