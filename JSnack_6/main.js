//Chiedere numero ad utente
var numero = parseInt(prompt("Dammi un numero"));

var cubo = [];
//Stampa il cubo dei N numeri
for (var i = 0; i < numero.length; i++) {
  numero = numero * numero * numero;
  cubo.push(numero);
}

console.log(cubo);
