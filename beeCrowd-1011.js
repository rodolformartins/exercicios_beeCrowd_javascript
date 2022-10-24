var input = require("fs").readFileSync("stdin", "utf-8");

var lines = input.split("\n");

/* 
Calcular e mostrar o volume de uma esfera

iremos receber o valor de seu raio(R)

Entrada:
    O arquivo de entrada contém um valor de ponto flutuante (dupla precisão), correspondente ao raio da esfera.

Processamento:
    A fórmula para calcular o volume é: (4/3) * pi * R3
    Considere (atribua) para pi o valor 3.14159.

Saída:
    A saída deverá ser uma mensagem "VOLUME" conforme o exemplo 
    fornecido abaixo, com um espaço antes e um espaço depois da igualdade. O valor deverá ser apresentado com 3 casas 
    após o ponto.    

    */


var raio = parseFloat(lines.shift());

var pi = 3.14159;

var volume = parseFloat((4 / 3.0) * pi * Math.pow(raio, 3));

console.log("VOLUME = " + volume.toFixed(3));