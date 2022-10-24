var input = require("fs").readFileSync("stdin", "utf-8");

var lines = input.split("\n");

/* 
Dois carros (X e Y) partem em uma mesma direção.

O carro X sai com velocidade constante de 60 Km/h

o carro Y sai com velocidade constante de 90 Km/h.

Em uma hora (60 minutos) o carro Y consegue se distanciar 30 quilômetros do carro X
ou seja, consegue se afastar 

um quilômetro a cada 2 minutos.

Tarefa:

Leia a distância (em Km) e calcule quanto tempo leva (em minutos) para o carro Y tomar essa distância do outro carro.

*/

var distancia = parseInt(lines.shift());

var tempoDuracao = distancia * 2;


console.log(tempoDuracao + " minutos");