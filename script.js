function separator(numb) {
    var str = numb.toString().split(".");
    str[0] = str[0].replace(/\B(?=([0-9]{2}$)+(?!\d))/g, ",");
    return str.join(".");
}

fetch("http://localhost:3000/api/teddies") //Récupération des données de l'API
    .then(function(response) {
        var myJSON_promise = response.json();
        myJSON_promise.then(function(myJSON) {
            for (let i = 0; i < 5; i++) { //Affichage des données selon le teddy choisi : de 0 à 4
                var nameTeddies = document.createTextNode(myJSON[i].name);
                prix = separator(myJSON[i].price);
                var priceTeddies = document.createTextNode(prix + " euros");
                var imageTeddies = myJSON[i].imageUrl;
                document.getElementById("nom_teddy" + i).appendChild(nameTeddies);
                document.getElementById("prix_teddy" + i).appendChild(priceTeddies);
                document.getElementById("image_teddy" + i).setAttribute("src", imageTeddies);
            }
        });
    })