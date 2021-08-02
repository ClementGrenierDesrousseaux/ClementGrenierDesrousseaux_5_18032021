function $_GET(param) {
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

function separator(numb) {
    var str = numb.toString().split(".");
    str[0] = str[0].replace(/\B(?=([0-9]{2}$)+(?!\d))/g, ",");
    return str.join(".");
}


var idTeddy = $_GET("id");

function affichageInfoTeddy(response) {
    var nomTeddy = document.createTextNode(response.name);
    var descTeddy = document.createTextNode(response.description);
    var prixTeddy = document.createTextNode(separator(response.price) + "€");
    document.getElementById("nomTeddy").appendChild(nomTeddy);
    document.getElementById("descTeddy").appendChild(descTeddy);
    document.getElementById("prixTeddy").appendChild(prixTeddy);
    document.getElementById("imageTeddy").setAttribute("src", response.imageUrl);

}

function affichageCouleurTeddy(response) {
    for (let i = 0; i < response.colors.length; i++) {
        var newOption = document.createElement("option");
        document.getElementById("select_color").appendChild(newOption).setAttribute("id", "color" + i);
        document.getElementById("color" + i).setAttribute("value", response.colors[i]);
        var newColor = document.createTextNode(response.colors[i]);
        document.getElementById("color" + i).appendChild(newColor);
    }

}




//Récupération de l'ourson et affichage de ses données
fetch("http://localhost:3000/api/teddies/" + idTeddy)
    .then(response => response.json())
    .then(function(response) {
        affichageInfoTeddy(response);
        affichageCouleurTeddy(response);

        var name = response.name;
        var prix = response.price;
        var tableau = JSON.parse(localStorage.getItem("panier")) || [];

        document.getElementById("panier").onclick = function afficherValeur(response) {
            if (document.getElementById("select_color").value == 0) {
                console.log("Veuillez choisir une couleur !")
            } else {
                var nouvelArticle = new Object();
                nouvelArticle.nom = name;
                nouvelArticle.prix = prix;
                nouvelArticle.couleur = document.getElementById("select_color").value;
                nouvelArticle.id = idTeddy;
                nouvelArticle.quantity = 1;

                var ajoutArticle = true

                tableau.forEach(element => {
                    if (element.id == nouvelArticle.id && element.couleur == nouvelArticle.couleur) {
                        ajoutArticle = false
                        element.quantity++;
                        localStorage.setItem("panier", JSON.stringify(tableau));
                    }
                })

                if (ajoutArticle) {
                    tableau.push(nouvelArticle);
                    localStorage.setItem("panier", JSON.stringify(tableau));
                }
            }
        }
    })

.catch(error => alert("Erreur : " + error));