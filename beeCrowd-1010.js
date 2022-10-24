var input = require("fs").readFileSync("stdin", "utf-8");

var lines = input.split("\n");


var linhas = lines;

var infoItem1 = linhas.shift().split(" ");

var infoItem2 = linhas.shift().split(" ");

var idItem1 = infoItem1.shift();
var qtdItem1 = infoItem1.shift();
var valorUnitarioItem1 = infoItem1.shift();

var idItem2 = infoItem2.shift();
var qtdItem2 = infoItem2.shift();
var valorUnitarioItem2 = infoItem2.shift();

var valorApagar = Number(qtdItem1 * valorUnitarioItem1) + Number(qtdItem2 * valorUnitarioItem2);

console.log("VALOR A PAGAR: R$ " + Number(valorApagar).toFixed(2));

