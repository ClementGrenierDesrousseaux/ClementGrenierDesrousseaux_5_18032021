const prix1 = 15.99;
const prix2 = 15.99;

var prix3 = prix1.toString();
var prix4 = prix2.toString();

const words = prix3.split('.');
console.log(words);
// expected output: "fox"

const words2 = prix4.split('.');
console.log(words2);

var prixEuros = parseInt(words[0]) + parseInt(words2[0]);
var prixCentimes = parseInt(words[1]) + parseInt(words2[1]);

console.log("Somme totale : " + prixEuros + "," + prixCentimes + " euros")