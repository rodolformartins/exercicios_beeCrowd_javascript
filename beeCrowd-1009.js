var input = require("fs").readFileSync("stdin", "utf-8");

var lines = input.split("\n");

var nomeVendedor = (lines.shift());

var salarioFixo = parseFloat(lines.shift()).toFixed(2);

var totalVendasEmDinheiro = parseFloat(lines.shift()).toFixed(2);

var valorReceberFinalDoMes = parseFloat(Number(salarioFixo) + Number(totalVendasEmDinheiro * 0.15)).toFixed(2);


console.log("TOTAL = R$ " + Number(valorReceberFinalDoMes).toFixed(2));




