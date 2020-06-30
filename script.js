// Il computer deve generare 16 numeri casuali tra 1 e 100.

// faccio generare al PC 16 numeri casuali tra 1 e 100 e li inserisco in un array vuoto.
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //Il max è incluso e il min è incluso
}

var arrNumPc = [];


for (var i = 1; i <= 16; i++) {
  var numCasualiPc = getRandomIntInclusive(1, 100);
  arrNumPc.push(numCasualiPc);
}
console.log(arrNumPc);




// I numeri non possono essere duplicati
// In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.

// creo una funzione che va a cercare dentro l'array appena creato una corrispondenza di numeri

function cercaNumero(array, num) {
  for (var i = 0; i < array.length; i++) {
    if (num == array[i]) {
      return "Ops hai beccato la mina";
    }
  }
  return "bravo";
}
var numeroUtente = parseInt(prompt("Dammi un numero da 1 a 100"));

console.log(numeroUtente);
console.log(cercaNumero(arrNumPc, numeroUtente));









// L’utente non può inserire più volte lo stesso numero.
// Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.
// La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.
