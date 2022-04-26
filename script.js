
/* Descrizione:
1. Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 5 secondi.
2. Dopo 5 secondi l’utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
3. Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.*/


const boxContainer = document.querySelector(".box-container");
let listNumbers = [];

init();

function init() {

  // Ciclo for che si collega alla funzione dei numeri randomici
  for (let x = 0; x < 5; x++) {

    let randomNumber = getUniqueRandomNumber(99, 1);
    console.log(randomNumber);

    const square = document.createElement("div");
    square.classList.add("square");
    square.innerHTML = randomNumber;

    boxContainer.append(square);



    square.innerhtml += randomNumber;

  }

  // Timer di 5 secondi
  setTimeout(() => {
    for (let x = 0; x < 5; x++) {
      // prompt("Inserisci uno alla volta, i numeri che hai visto")
    }
  }, 5000);

}



//Funzione che genera 5 numeri casuali

function getUniqueRandomNumber(min, max){
  let number = null;
  let valid = false;

  // se il numero è presente nell'array globale listNumbers valid è false quindi ne estraggo un'altro e così via
  while(!valid){
      number = getRandomNumber(min, max);
      // se listNumbers non contiene number allora il numero è valido
      if(!listNumbers.includes(number)){
          // valid diventa true e blocca il ciclo
          valid = true;
          // aggiungo il numero alla lista
          listNumbers.push(number)
      }
  }

  return number;
}

  function getRandomNumber(max, min) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;

  }