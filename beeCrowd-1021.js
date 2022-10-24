var input = require("fs").readFileSync("stdin", "utf-8");

var lines = input.split("\n");

/* 
Leia um valor de ponto flutuante com duas casas decimais.
Este valor representa um valor monetário. 
A seguir, calcule o menor número de notas e moedas possíveis no qual o valor pode ser decomposto.
As notas consideradas são de 100, 50, 20, 10, 5, 2. 


As moedas possíveis são de 1, 0.50, 0.25, 0.10, 0.05 e 0.01. 
A seguir mostre a relação de notas necessárias.
*/

var valor = parseFloat(lines.shift());


//Notas
let nota100 = Math.trunc(valor / 100);
let valorAtualizado = (valor - (nota100 * 100));

let nota50 = Math.trunc(valorAtualizado / 50);
valorAtualizado = valorAtualizado - (nota50 * 50);

let nota20 = Math.trunc(valorAtualizado / 20);
valorAtualizado = valorAtualizado - (nota20 * 20);

let nota10 = Math.trunc(valorAtualizado / 10);
valorAtualizado = valorAtualizado - (nota10 * 10);

let nota5 = Math.trunc(valorAtualizado / 5);
valorAtualizado = valorAtualizado - (nota5 * 5);

let nota2 = Math.trunc(valorAtualizado / 2);
valorAtualizado = valorAtualizado - (nota2 * 2);

//Moedas
let moeda1 = Math.trunc(valorAtualizado / 1);
valorAtualizado = valorAtualizado - (moeda1 * 1);

let moeda050 = Math.trunc(valorAtualizado / 0.50);
valorAtualizado = valorAtualizado - (moeda050 * 0.50);

let moeda025 = Math.trunc(valorAtualizado / 0.25);
valorAtualizado = valorAtualizado - (moeda025 * 0.25);

let moeda010 = Math.trunc(valorAtualizado / 0.10);
valorAtualizado = valorAtualizado - (moeda010 * 0.10);

let moeda05 = Math.trunc(valorAtualizado / 0.05);
valorAtualizado = valorAtualizado - (moeda05 * 0.05);

let moeda01 = Math.trunc(valorAtualizado / 0.01);
valorAtualizado = valorAtualizado - (moeda01 * 0.01);


console.log('NOTAS:');
console.log(nota100 + " nota(s) de R$ 100.00");
console.log(nota50 + " nota(s) de R$ 50.00");
console.log(nota20 + " nota(s) de R$ 20.00");
console.log(nota10 + " nota(s) de R$ 10.00");
console.log(nota5 + " nota(s) de R$ 5.00");
console.log(nota2 + " nota(s) de R$ 2.00");

console.log('MOEDAS:');
console.log(moeda1 + " moeda(s) de R$ 1.00");
console.log(moeda050 + " moeda(s) de R$ 0.50");
console.log(moeda025 + " moeda(s) de R$ 0.25");
console.log(moeda010 + " moeda(s) de R$ 0.10");
console.log(moeda05 + " moeda(s) de R$ 0.05");
console.log(moeda01 + " moeda(s) de R$ 0.01");








