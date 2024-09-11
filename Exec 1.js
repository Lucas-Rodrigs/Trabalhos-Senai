const input = require('prompt-sync')();
var peso = parseFloat(input("Peso: "));
var altura = parseFloat(input("Altura: "));

var imc = peso/altura*altura

if (imc < 18.5) {
    console.log(imc = "Abaixo do Peso")
}
if (imc >= 18.5 && imc < 24.9) {
    console.log(imc = "Peso Normal")
}
if (imc >= 25 && imc < 29 ) {
    console.log(imc = "Acima do Peso")
}
if (imc >= 30 && imc < 35 ) {
    console.log(imc = "Obesidade grau 1")
}
if (imc >= 36 && imc < 40 ) {
    console.log(imc = "Obesidade grau 2")
}
if (imc > 40 ) {
    console.log(imc = "Obesidade grau 3")
}