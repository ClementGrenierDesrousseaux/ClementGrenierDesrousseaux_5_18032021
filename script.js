var request = new XMLHttpRequest();
request.open("GET", "http://localhost:3000/api/teddies");
request.send();

request.onload = function() {
    var response = JSON.parse(this.response);
    for (let i = 0; i < 5; i++) {
        var nameTeddies = document.createTextNode(response[i].name);
        var priceTeddies = document.createTextNode(response[i].price + " euros");
        var imageTeddies = response[i].imageUrl;
        var urlProduitTeddies = "produit.html/?id=" + response[i]._id;
        document.getElementById("nom_teddy" + i).appendChild(nameTeddies);
        document.getElementById("prix_teddy" + i).appendChild(priceTeddies);
        document.getElementById("image_teddy" + i).setAttribute("src", imageTeddies);
        document.getElementById("teddy" + i).setAttribute("href", urlProduitTeddies);


    }
}