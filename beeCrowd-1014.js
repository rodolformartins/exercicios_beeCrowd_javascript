var input = require("fs").readFileSync("stdin", "utf-8");

var lines = input.split("\n");

/* */

var distancia = parseInt(lines.shift());
var combustivelGasto = parseFloat(lines.shift());

var consumoMedio = distancia / combustivelGasto;

console.log(consumoMedio.toFixed(3) + " km/l");
