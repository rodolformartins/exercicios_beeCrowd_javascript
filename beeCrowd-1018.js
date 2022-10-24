var input = require("fs").readFileSync("stdin", "utf-8");

var lines = input.split("\n");

/* 
Leia um valor inteiro. 
A seguir, calcule o menor número de notas possíveis (cédulas) 
no qual o valor pode ser decomposto. As notas consideradas
são de 100, 50, 20, 10, 5, 2 e 1. A seguir mostre o valor lido e a relação de notas necessárias.
*/

var valorEntrada = parseInt(lines.shift());

const notas = [100, 50, 20, 10, 5, 2, 1];

console.log(valorEntrada);
for (var ini = 0; ini <= 6; ini++) {
    var notaAtual = Math.floor(valorEntrada / notas[ini]);
    var valorEntrada = valorEntrada % notas[ini];
    console.log(`${notaAtual} nota(s) de R$ ${notas[ini]},00`);
}


