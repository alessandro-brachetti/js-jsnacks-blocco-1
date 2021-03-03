//Utente inserisce 2 parole
var prima = prompt("Dammi la prima parola:");

var seconda = prompt("Dammi la seconda parola:");

console.log(prima.length);

console.log(seconda.length);

if (prima.length > seconda.length) {
  console.log(seconda, prima);
} else {
  console.log(prima, seconda);
}
