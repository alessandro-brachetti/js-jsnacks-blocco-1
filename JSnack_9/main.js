//Calcola la somma e la media dei primi 10 numeri
var numeri = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var somma = 0;

for (var i = 0; i < numeri.length; i++) {
  somma += numeri[i];
}

console.log(somma);

var media = somma / numeri.length;

console.log(media);
