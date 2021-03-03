//Chiedi numero di 4 cifre ad utente
var numero = parseInt(prompt("Dammi un numero di 4 cifre"));
var array = [];
var digit = numero.toString();
var somma = 0;

console.log(numero);

for (var i = 0; i < digit.length; i++) {
  array[i] = digit.charAt(i);
}

for (var i = 0; i < array.length; i++) {
  somma += parseInt(array[i]);
}

console.log(somma);
