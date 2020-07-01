// BONUS: (da fare solo se funziona tutto il resto)
// all’inizio il software richiede anche una difficoltà all’utente che cambia il range di numeri casuali:
// con difficoltà 0 => tra 1 e 100
// con difficoltà 1 =>  tra 1 e 80
// con difficoltà 2 => tra 1 e 50

// chiedo tramite prompt all'utente di scegliere la difficoltà
var difficolta = parseInt(prompt("Scegli il livello di difficoltà: 0 1 2"));



// Il computer deve generare 16 numeri casuali con range variabile a seconda della difficoltà

// faccio generare al PC 16 numeri casuali tra 1 e 100 e li inserisco in un array vuoto.
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //Il max è incluso e il min è incluso
}
// I numeri non possono essere duplicati
var arrNumPc = [];
var numCasualiPc;
while (arrNumPc.length < 16) {
  if (difficolta == 0) {
    numCasualiPc = getRandomIntInclusive(1, 100);
  } else if (difficolta == 1) {
    numCasualiPc = getRandomIntInclusive(1, 80);
  } else if (difficolta == 2) {
    numCasualiPc = getRandomIntInclusive(1, 50);
  } else if (isNaN(difficolta) || difficolta > 2) {
    numCasualiPc = getRandomIntInclusive(1, 100);
  }
  // console.log(numCasualiPc);
  // a questo punto devo controllare se il numero generato random è già incluso nel mio array
  // var incluso = arrNumPc.includes(numCasualiPc); //mi tornerà true o false
  if (cercaNumero(arrNumPc, numCasualiPc) == false) {
    arrNumPc.push(numCasualiPc)
  }
}
console.log(arrNumPc);
// for (var i = 1; i <= 16; i++) {
//   var numCasualiPc = getRandomIntInclusive(1, 100);
//   arrNumPc.push(numCasualiPc);
// }


// creo una funzione che va a cercare dentro l'array dei numeri PC una corrispondenza di numeri
function cercaNumero(array, num) {
  var j = 0;
  while (j < array.length) {
    if (num == array[j]) {
      return true;
    }
    j++;
  }
  return false;
}

// function cercaNumero(array, num) {
//   for (var i = 0; i < array.length; i++) {
//     if (num == array[i]) {
//       return true;
//     }
//   }
//   return false;
// }

// In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
// L’utente non può inserire più volte lo stesso numero.
// Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.

var arrNumUtente = [];

var maxTentativi = 5;

var punteggio = 0;
while ((arrNumUtente.length < maxTentativi) && (cercaNumero(arrNumPc, numeroUtente) == false)) {
  var numeroUtente = parseInt(prompt("Inserisci un numero da 1 a 100"));
  // ora però devo far si che l'utente non inserisca 2 volte lo stesso numero o un valore non consentito
  // var inclusoUtente = arrNumUtente.includes(numeroUtente); //mi tornerà true o false
  if (consentiti(1, 100, numeroUtente) == true && cercaNumero(arrNumPc, numeroUtente) == false && cercaNumero(arrNumUtente, numeroUtente) == false) {
    arrNumUtente.push(numeroUtente);
    punteggio++;
  } else if (cercaNumero(arrNumUtente, numeroUtente) == true) {
    alert("Hai già inserito questo numero")
  } else if (consentiti(1, 100, numeroUtente) == false) {
    alert("Inserisci un valore consentito")
  }
}
console.log(arrNumUtente);





// La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
// salvo la funzione in una variabile
var verifica = cercaNumero(arrNumPc, numeroUtente);

if (verifica == true) {
  console.log("Ops hai beccato una mina, hai perso");
  document.getElementById('punti').innerHTML = "Ops hai beccato una mina, hai perso. Hai totalizzato " + punteggio + " punti."
} else {
  console.log("Hai vinto");
  document.getElementById('punti').innerHTML = "Complimenti! Hai vinto! Hai totalizzato " + punteggio + " punti."

}


// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.
console.log("il tuo punteggio è:", punteggio);
document.getElementById('difficolta').innerHTML = "Difficoltà selezionata: livello " + difficolta;



// scrivo anche una funzione per controllare se l'utente inserisce valori diversi da un numero
function consentiti(min, max, num) {
  if (num >= min && num <= max && !isNaN(num)) {
    return true;
  }
  return false;
}
