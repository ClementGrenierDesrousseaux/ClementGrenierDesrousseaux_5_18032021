var teddy1 = new Object();
teddy1.nom = "Petit ours brun";
teddy1.desc = "Coucou je suis un ourson mignon";
teddy1.prix = "12 Euros";

var teddy2 = new Object();
teddy2.nom = "Ours lessive";
teddy2.desc = "J'ai pas d'idée pour la description";
teddy2.prix = "13 Euros";


var teddy3 = new Object();
teddy3.nom = "Famille ours";
teddy3.desc = "La famille Ours pour les emmener en ballade";
teddy3.prix = "14 Euros";


var teddy4 = new Object();
teddy4.nom = "Ourson Je T'aime";
teddy4.desc = "Petit ourson à offrir à votre moitiée";
teddy4.prix = "15 Euros";


var teddy5 = new Object();
teddy5.nom = "Ourson rêveur";
teddy5.desc = "Petit oursqui adore regarder les étoiles";
teddy5.prix = "16 Euros";


document.getElementById("section_panier").style.display = "none"



document.getElementById("teddy1").onclick = function() {
    document.getElementById("section_accueil").style.display = "none";
    document.getElementById("section_panier").style.display = "block";
    document.getElementById("nomTeddy").innerHTML = teddy1.nom;
    document.getElementById("descTeddy").innerHTML = teddy1.desc;
    document.getElementById("prixTeddy").innerHTML = teddy1.prix;
    document.getElementById("imagePanier").src = "images/img-teddies-resized/teddy_1.jpg";
}

document.getElementById("teddy2").onclick = function() {
    document.getElementById("section_accueil").style.display = "none";
    document.getElementById("section_panier").style.display = "block";
    document.getElementById("nomTeddy").innerHTML = teddy2.nom;
    document.getElementById("descTeddy").innerHTML = teddy2.desc;
    document.getElementById("prixTeddy").innerHTML = teddy2.prix;
    document.getElementById("imagePanier").src = "images/img-teddies-resized/teddy_2.jpg";
}

document.getElementById("teddy3").onclick = function() {
    document.getElementById("section_accueil").style.display = "none";
    document.getElementById("section_panier").style.display = "block";
    document.getElementById("nomTeddy").innerHTML = teddy3.nom;
    document.getElementById("descTeddy").innerHTML = teddy3.desc;
    document.getElementById("prixTeddy").innerHTML = teddy3.prix;
    document.getElementById("imagePanier").src = "images/img-teddies-resized/teddy_3.jpg";
}

document.getElementById("teddy4").onclick = function() {
    document.getElementById("section_accueil").style.display = "none";
    document.getElementById("section_panier").style.display = "block";
    document.getElementById("nomTeddy").innerHTML = teddy4.nom;
    document.getElementById("descTeddy").innerHTML = teddy4.desc;
    document.getElementById("prixTeddy").innerHTML = teddy4.prix;
    document.getElementById("imagePanier").src = "images/img-teddies-resized/teddy_4.jpg";
}

document.getElementById("teddy5").onclick = function() {
    document.getElementById("section_accueil").style.display = "none";
    document.getElementById("section_panier").style.display = "block";
    document.getElementById("nomTeddy").innerHTML = teddy5.nom;
    document.getElementById("descTeddy").innerHTML = teddy5.desc;
    document.getElementById("prixTeddy").innerHTML = teddy5.prix;
    document.getElementById("imagePanier").src = "images/img-teddies-resized/teddy_5.jpg";
}

var request = new XMLHttpRequest;
var varNantes = "nantes";

request.onload = function() {
    var response = JSON.parse(this.responseText);
    document.getElementById("temps-nantes").innerHTML = "Il fait en ce moment " + response.current_condition.condition + " à Nantes avec une température de " + response.current_condition.tmp + " degrés Celcius.";
}

request.open("GET", "https://www.prevision-meteo.ch/services/json/" + varNantes);
request.send();

/*
request.onload = function() {
    var response = this.responseText;
    document.getElementById("temps-nantes").innerHTML = response;
}

request.open("GET", "http://localhost:3000/api/teddy");
request.send();*/