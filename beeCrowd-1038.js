const { Console } = require("console");

var input = require("fs").readFileSync("stdin", "utf-8");

var lines = input.split("\n");

var line = lines.shift().split(' ');

var codigo = line[0];

var quantidade = line[1];

var valorItem;

if(codigo == 1){
    valorItem = 4.00;
} else if(codigo == 2){
    valorItem = 4.50;
} else if(codigo == 3){
    valorItem = 5.00;
} else if(codigo == 4){
    valorItem = 2.00;
} else if(codigo == 5){
    valorItem = 1.50;
}

var total = valorItem * quantidade;



console.log("Total: R$ " + total.toFixed(2));










