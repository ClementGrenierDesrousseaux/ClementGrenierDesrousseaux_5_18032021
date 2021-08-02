function separator(numb) {
    var str = numb.toString().split(".");
    str[0] = str[0].replace(/\B(?=([0-9]{2}$)+(?!\d))/g, ",");
    return str.join(".");
}

//Création de la div pour afficher l'ourson
function newTeddy(response) {
    for (let i = 0; i < response.length; i++) {
        var newA = document.createElement("a");
        document.getElementById("affichageTeddies").appendChild(newA).setAttribute("id", "globalTeddy" + i);
        document.getElementById("globalTeddy" + i).setAttribute("href", "pages/produit.html?id=" + response[i]._id)
        var newFigure = document.createElement("figure");
        document.getElementById("globalTeddy" + i).appendChild(newFigure).setAttribute("id", "teddy" + i);
        var newImg = document.createElement("img");
        document.getElementById("teddy" + i).appendChild(newImg).setAttribute("id", "imageURL" + i);
        var newFigCap = document.createElement("figcaption");
        document.getElementById("teddy" + i).appendChild(newFigCap).setAttribute("id", "figCap_teddy" + i);
        var newP = document.createElement("p");
        document.getElementById("figCap_teddy" + i).appendChild(newP).setAttribute("id", "name" + i);
        var newP = document.createElement("p");
        document.getElementById("figCap_teddy" + i).appendChild(newP).setAttribute("id", "price" + i);
    }
}

//Affichage nom de l'ourson
function teddiesName(response) {
    for (let i = 0; i < response.length; i++) {
        var newName = document.createTextNode(response[i].name);
        document.getElementById("name" + i).appendChild(newName);
    }
}

//Affichage prix de l'ourson
function teddiesPrice(response) {
    for (let i = 0; i < response.length; i++) {
        var price = separator(response[i].price)
        var newName = document.createTextNode(price + "€");
        document.getElementById("price" + i).appendChild(newName);
    }
}

//Affichage imageUrl de l'ourson
function teddiesImageURL(response) {
    for (let i = 0; i < response.length; i++) {
        var newName = response[i].imageUrl;
        document.getElementById("imageURL" + i).setAttribute("src", newName);
    }
}



//Récupération de l'ourson et affichage de ses données
fetch("http://localhost:3000/api/teddies")
    .then(response => response.json())
    .then(function(response) {
        newTeddy(response);
        teddiesName(response);
        teddiesPrice(response);
        teddiesImageURL(response);
    })
    .catch(error => alert("Erreur : " + error));