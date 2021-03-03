//Crea un array vuoto
var dispari = [];

//Chiedi per 6 volte un numero all'utente
for (var i = 0; i < 6; i++) {
  var numero = parseInt(prompt("Dammi un numero"));
  if (numero %2) {
    dispari.push(numero);
  }
}

document.getElementById('dispari').innerHTML = "I numeri dispari sono: " + dispari;
