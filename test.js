var request = new XMLHttpRequest();
var nameTeddy = document.getElementById("nom_teddy").value;
request.open("POST", "http://localhost:3000/api/teddies");
request.open("GET", "http://localhost:3000/api/teddies");
request.setRequestHeader("Content-Type", "application/json");
request.send(JSON.stringify(nameTeddy));


request.onload = function() {
    if (request.status === 200) {
        var response = JSON.parse(this.response);
        document.getElementById("temps-paris").innerHTML = response;
    }
}

Image