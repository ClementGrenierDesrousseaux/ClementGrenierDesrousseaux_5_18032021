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






fetch("http://localhost:3000/api/teddies")
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
    })