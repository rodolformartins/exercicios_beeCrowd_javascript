var input = require("fs").readFileSync("stdin", "utf-8");

var lines = input.split("\n");

/* 
Joaozinho quer calcular e mostrar a quantidade de litros de combustível gastos em uma viagem,

ao utilizar um automóvel que faz 12 KM/L


Entradas:
Para efetuar o cálculo, deve-se fornecer o tempo gasto na viagem (em horas)
e a velocidade média durante a mesma (em km/h)

Processamento:
1) Assim, pode-se obter distância percorrida
2) Calcular quantos litros seriam necessários


Saída:
Mostre o valor com 3 casas decimais após o ponto.

*/

var tempoGastoNaViagem = parseInt(lines.shift());
var mediaEmKm = parseInt(lines.shift()); 

var distanciaPercorrida = parseInt(tempoGastoNaViagem * mediaEmKm);

var litrosNecessarios = distanciaPercorrida / 12;

console.log(litrosNecessarios.toFixed(3));



