var input = require("fs").readFileSync("stdin", "utf-8");

var valores = input.split("\n");


/*
Leia dois valores inteiros para variáveis A e B.

Calcule a soma entre eles

e atribua o resultado a variável SOMA

a seguir escreva o valor como saida
Exemplo:
SOMA = 40

*/

var A = parseInt(valores.shift());
var B = parseInt(valores.shift());

var SOMA = A + B;

console.log("SOMA = " + SOMA);