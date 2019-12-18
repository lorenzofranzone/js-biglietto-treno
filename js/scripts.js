// Chiedo all'utente quanti km vuole percorrere
var km = prompt("Quanti km vuoi percorrere?");
console.log(km);

// Chiedo all'utente quantit anni ha
var età = prompt("Quanti anni hai?");
console.log(età);

// Determino il prezzo base a km del biglietto
var prezzoBase = 0.21 * km;
console.log(prezzoBase);

// Determino le condizioni di sconto sul prezzo del biglietto

// Se l'utente è minorenne ricalcolo il valore della variabile prezzoBase
// Al prezzoBase sottraggo il 20% di sconto
if (età < 18) {
  // prezzoBase = prezzoBase - (prezzoBase / 100 * 20);
  prezzoBase = prezzoBase * 0.80;
}

// Se l'utente è over 65 ricalcolo il valore della variabile prezzoBase
// Al prezzoBase sottraggo il 40% di sconto
else if (età > 65) {
  // prezzoBase = prezzoBase - (prezzoBase / 100 * 40);
  prezzoBase = prezzoBase * 0.60;
}
console.log(prezzoBase);

// Stampo in HTML il prezzo generato dal calcolo con le variabili
document.getElementById('prezzo').innerHTML = '€' + prezzoBase;
