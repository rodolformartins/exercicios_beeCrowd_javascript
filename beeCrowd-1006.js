var input = require("fs").readFileSync("stdin", "utf-8");

var valores = input.split("\n");
/* 
Leia 3 valores, no caso, variáveis A, B e C, que são as três notas de um aluno

A seguir, calcule a média do aluno, sabendo que a nota A tem peso 2, a nota B tem peso 3 e a nota C tem peso 5
*/

var A = parseFloat(valores.shift());
var B = parseFloat(valores.shift());
var C = parseFloat(valores.shift());

var media = Number((A * 2 + B * 3 + C * 5) / 10);

console.log("MEDIA = " + media.toFixed(1));


