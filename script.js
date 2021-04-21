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
                document.getElementById("image_teddy" + i).setAttribute("src", imageTeddies);
            }
        });
    })

var style = false;
document.getElementById("nom_filtre").onclick = function() {

    if (style === false) {
        document.getElementById("formulaire_filtre").style.display = "block";
        style = true;
    }
    if (style === true) {
        document.getElementById("formulaire_filtre").style.display = "none";
        style = false;
    }




}