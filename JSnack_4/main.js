//Lista degli invitati
var invitati = ["pippo", "pluto", "topolino", "minnie", "paperino", "simba", "nala"];

//Chiedi all'utente il suo nome
var nome = prompt("Dimmi il tuo nome");

console.log(nome);

var flag = false;
//Controllo nome nella Lista
for (var i = 0; i < invitati.length; i++) {
  if (invitati[i] == nome) {
    flag = true;
  }
}
//Stampo messaggio
if (flag) {
  document.getElementById('accesso').innerHTML = "Puoi entrare alla festa"
} else {
  document.getElementById('accesso').innerHTML = "Non puoi entrare alla festa"
}
