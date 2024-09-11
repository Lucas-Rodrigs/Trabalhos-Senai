const input = require('prompt-sync')();
var numero = parseFloat(input("Digite um Número: "));
var result = numero%2

if (result == 0) {
    console.log("Este número é PAR")
}
else {
    console.log("Este número é IMPAR")
}