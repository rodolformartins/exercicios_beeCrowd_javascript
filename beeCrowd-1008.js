var input = require("fs").readFileSync("stdin", "utf-8");

var lines = input.split("\n");


var numFuncionario = parseInt(lines.shift());

var numHorasTrabalhadas = parseInt(lines.shift());

var valorPorHora = parseFloat(lines.shift()).toFixed(2);

console.log("NUMBER = " + numFuncionario);
console.log("SALARY = U$" + Number(numHorasTrabalhadas * valorPorHora).toFixed(2));

