/*var request = new XMLHttpRequest();
request.open("GET", "http://localhost:3000/api/teddies");
request.send();

request.onload = function() {
    var response = JSON.parse(this.response);
    for (let i = 0; i < 5; i++) {
        var nameTeddies = document.createTextNode(response[i].name);
        var priceTeddies = document.createTextNode(response[i].price + " euros");
        var imageTeddies = response[i].imageUrl;
        document.getElementById("nom_teddy" + i).appendChild(nameTeddies);
        document.getElementById("prix_teddy" + i).appendChild(priceTeddies);
        document.getElementById("img_teddy" + i).setAttribute("src", imageTeddies);
    }
}*/







/*fetch("http://localhost:3000/api/teddies")
    .then(response => response.json())
    .then(response => document.getElementById("nom_teddy0").innerHTML = response[0].name)
    .then(response => document.getElementById("prix_teddy0").innerHTML = response[0].price)*/






/*fetch("http://localhost:3000/api/teddies")
    .then(function(response) {
        var myJSON_promise = response.json();
        myJSON_promise.then(function(myJSON) {
            for (let i = 0; i < 5; i++) {
                var nameTeddies = document.createTextNode(myJSON[i].name);
                var priceTeddies = document.createTextNode(myJSON[i].price + " euros");
                var imageTeddies = myJSON[i].imageUrl;
                document.getElementById("nom_teddy" + i).appendChild(nameTeddies);
                document.getElementById("prix_teddy" + i).appendChild(priceTeddies);
                document.getElementById("img_teddy" + i).setAttribute("src", imageTeddies);
            }
        });
    })*/


/*function Personne(prenom, nom, age, genre) {
    this.nom = {
        prenom,
        nom
    };
    this.age = age;
    this.genre = genre;
};

var personne1 = new Personne(prompt("prenom"), prompt("nom"), prompt("age"), prompt("genre"));
console.log(personne1);
console.log(personne1.genre);*/

/*let test = [];
class Panier {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
}

for (let i = 0; i < 4; i++) {
    test.push(i);
    panier[i] = new Panier("Michel", "15 euros");
    console.log(panier[i]);
}*/

var tab = ["foo", "bar"]
var len = tab.length;
var mesObjets = new Array();

var monObjet = function(titi) {
    this.mavariable = titi;
    //this.verif = function() {
    //    console.log(this.mavariable);
    //}
}

//exemple en ddehors d'une boucle
//mesObjets.push(new monObjet('toto'));
//mesObjets.push(new monObjet('titi'));

//mesObjets[0].verif();

//à l'intérieur d'une boucle

for (i = 0; i < 2; i++) {
    mesObjets.push(new monObjet(tab[i]));
}

//for (i = 2; i < 4; i++) {
//    mesObjets[i].verif();
//}

console.log(mesObjets)
let panierString = JSON.stringify(mesObjets);
localStorage.setItem("panier", panierString);