const { Console } = require("console");

var input = require("fs").readFileSync("stdin", "utf-8");

var lines = input.split("\n");

/* 
Leia 3 valores de ponto flutuante e 
efetue o cálculo das raízes da equação de Bhaskara. 
Se não for possível calcular as raízes, mostre a mensagem correspondente “Impossivel calcular”, 
caso haja uma divisão por 0 ou raiz de numero negativo.

*/

var line = lines.shift().split(' ');



//Entrada dos valores
var a = parseFloat(line[0]);

var b = parseFloat(line[1]);

var c = parseFloat(line[2]);




var pi = (b * b) - (4 * a * c);

console.log(pi);

if (pi < 0) {

    console.log('Impossivel calcular');

} else if (a === 0) {

    console.log('Impossivel calcular');

} else {

    var r1 = parseFloat((-b + Math.sqrt(pi)) / (a + a));

    var r2 = parseFloat((-b - Math.sqrt(pi)) / (a + a));

    console.log('R1 = ' + r1.toFixed(5));

    console.log('R2 = ' + r2.toFixed(5));

}


