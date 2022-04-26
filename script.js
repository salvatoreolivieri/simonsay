
/* Descrizione:
1. Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 5 secondi.
2. Dopo 5 secondi l’utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.*/

init();

function init() {

  // Ciclo for che si collega alla funzione dei numeri randomici
  for (let x = 0; x < 5; x++) {

    let randomNumber = getRandomNumber(99, 1);
    console.log(randomNumber);

  }

  // Timer di 5 secondi
  setTimeout(() => {
    console.log("sono passati 5 secondi");
  }, 5000);

}



//Funzione che genera 5 numeri casuali

function getRandomNumber(max, min) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;

}