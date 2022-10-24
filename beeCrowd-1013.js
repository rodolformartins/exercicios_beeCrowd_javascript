var input = require("fs").readFileSync("stdin", "utf-8");

var lines = input.split("\n");


/*
first step
    Ok separete three numbers
    Fazer o processamento com a formula indicada
*/
var dados = lines;

var geral = dados.shift().split(" ");

var A = parseFloat(geral.shift());
var B = parseFloat(geral.shift());
var C = parseFloat(geral.shift());

var maiorAB = (A + B + Math.abs(A - B)) / 2;

var maiorXC = (C + maiorAB + Math.abs(C - maiorAB)) / 2;

console.log(maiorXC + " eh o maior");
