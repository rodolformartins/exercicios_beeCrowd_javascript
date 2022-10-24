var input = require("fs").readFileSync("stdin", "utf-8");

var lines = input.split("\n");


/* 
Escreva um programa que leia três valores com ponto flutuante de dupla precisão: A, B e C

calcular:
a) a área do triângulo retângulo que tem A por base e C por altura.
b) a área do círculo de raio C. (pi = 3.14159)
c) a área do trapézio que tem A e B por bases e C por altura.
d) a área do quadrado que tem lado B.
e) a área do retângulo que tem lados A e B.

*/

var dados = lines;

var geral = dados.shift().split(" ");

var A = parseFloat(geral.shift());
var B = parseFloat(geral.shift());
var C = parseFloat(geral.shift());

var triangulo = (A * C) / 2;
var circulo = (3.14159 * Math.pow(C, 2));
var trapezio = ((A + B) * C) / 2;
var quadrado = B * B;
var retangulo = A * B;

console.log("TRIANGULO: " + triangulo.toFixed(3));
console.log("RAIO: " + circulo.toFixed(3));
console.log("TRAPEZIO: " + trapezio.toFixed(3));
console.log("QUADRADO: " + quadrado.toFixed(3));
console.log("RETANGULO: " + retangulo.toFixed(3));



