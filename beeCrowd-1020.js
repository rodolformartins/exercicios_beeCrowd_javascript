var input = require("fs").readFileSync("stdin", "utf-8");

var lines = input.split("\n");

/* 
Leia um valor inteiro correspondente à idade de uma pessoa em dias e informe-a em anos, meses e dias

Obs.: apenas para facilitar o cálculo, considere todo ano com 365 dias e todo mês com 30 dias

O arquivo de entrada contém um valor inteiro.
*/

var idadeEmDias = parseInt(lines.shift());

var anos = Math.floor(idadeEmDias / 365);

var meses = Math.floor((idadeEmDias - (anos * 365)) / 30);

var dias = Math.floor((idadeEmDias - (anos * 365)) - (meses * 30));

console.log(anos + ' ano(s)\n' + meses + ' mes(es)\n' + dias + ' dia(s)');