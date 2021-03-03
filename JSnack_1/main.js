//L'utente inserisce 2 numeri
var numero1 = parseInt(prompt("Dammi un numero:"));

console.log(numero1);

var numero2 = parseInt(prompt("Dammi un numero:"));

console.log(numero2);

if (numero1 > numero2) {
  document.getElementById('maggiore').innerHTML = numero1;
} else  {
  document.getElementById('maggiore').innerHTML = numero2;
}
