var input = require("fs").readFileSync("stdin", "utf-8");

var lines = input.split("\n");

/* Leia um valor inteiro, que é o tempo de duração em segundos de um determinado evento em uma fábrica, 
e informe-o expresso no formato horas:minutos:segundos. */

var tempoEmSegundos = parseInt(lines.shift());

var horas = Math.floor(tempoEmSegundos / 3600);

//Menos a diferença consumida pelas horas
var minutos = Math.floor((tempoEmSegundos - (horas * 3600)) / 60);

var segundos = Math.round(tempoEmSegundos % 60);

console.log(horas + ':' + minutos + ':' + segundos);