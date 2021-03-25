var request = new XMLHttpRequest();
var newElement = document.createElement("p");
var newElement = document.createElement("p");

request.open("GET", "http://localhost:3000/api/teddies");
request.send();

request.onload = function() {
    var response = JSON.parse(this.response);
    var newElement = document.createElement("p");
    var newName = "Michel";
    document.getElementById("figcap_teddy1").appendChild(newElement.append(newName)).id = "nom_teddy1";
    var newElement = document.createElement("p");
    var newPrice = "45 euros";
    document.getElementById("figcap_teddy1").appendChild(newElement.append(newPrice)).id = "prix_teddy1";
}