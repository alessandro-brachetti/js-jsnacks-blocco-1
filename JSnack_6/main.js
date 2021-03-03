//Chiedere numero ad utente
var numero = parseInt(prompt("Dammi un numero"));

var numeri = [];
//Stampa il cubo dei primi N numeri
for (var i = 0; i < numero; i++) {
  numeri.push(i*i*i);
}

console.log(numeri);
