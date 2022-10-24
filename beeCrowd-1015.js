var input = require("fs").readFileSync("stdin", "utf-8");

var lines = input.split("\n");


/* 
Ler quatro valores

elaborar a formula

*/

var dados = lines;

var geral1 = dados.shift().split(" ");
var geral2 = dados.shift().split(" ");


var X1 = parseFloat(geral1.shift());
var Y1 = parseFloat(geral1.shift());

var X2 = parseFloat(geral2.shift());
var Y2 = parseFloat(geral2.shift());


var distancia = Math.sqrt(Math.pow(X2 - X1, 2) + Math.pow(Y2 - Y1, 2));

console.log(distancia.toFixed(4));



