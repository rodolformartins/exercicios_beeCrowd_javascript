/*Tutorial de como configurar o ambiente
https://youtu.be/JGI0iKT0C4A

 */

var input = require("fs").readFileSync("stdin", "utf-8");

var valores = input.split("\n");

var A = parseInt(valores.shift());
var B = parseInt(valores.shift());

var X = A + B;

console.log("X = " + X);