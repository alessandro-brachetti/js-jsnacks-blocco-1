//Chiedere 10 numeri all'utente
var somma = 0;

for (var i = 0; i < 10; i++) {
  var numero = parseInt(prompt("Dammi un numero:"));
  console.log(numero);
  somma = somma + numero;
}
//Stampa la somma dei numeri
  document.getElementById('somma').innerHTML = somma;
