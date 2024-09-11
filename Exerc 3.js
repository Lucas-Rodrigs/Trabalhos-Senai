const input = require('prompt-sync') ();

var idade = parseFloat(input("Qual a sua idade? "));

if (idade < 18) {
    console.log("Você é menor de idade!");
}
if (idade >= 18) {
    console.log("Você já pode ser preso!!!");
}