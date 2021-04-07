var nbClickJSON = localStorage.getItem("NombreClick");
var nbClick = JSON.parse(nbClickJSON);
var len = nbClick.length;


function afficherProduit() {
    for (let i = 0; i < len; i++) {
        var monArticleJSON = localStorage.getItem("article" + i);
        var monArticle = JSON.parse(monArticleJSON);
        document.getElementById("nom" + i).innerHTML = monArticle.name;
        document.getElementById("prix" + i).innerHTML = monArticle.price;
    }
}
afficherProduit();