
const div = document.querySelector('#results');
const buttons = document.querySelector('.buttons');
const container = document.querySelector('.container')
const btn1 = document.querySelector('#scissor');
const btn2 = document.querySelector('#paper');
const btn3 = document.querySelector('#rock');

let scoreComputer = 0;
let scorePlayer = 0
let ties = 0;
let result = '';
let endResult = '';
let selection = '';
		
function computerPlay() {
  let randomNumber = Math.floor(Math.random() * 3);
  if (randomNumber === 0) return "Piedra";
  if (randomNumber === 1) return "Papel";
  if (randomNumber === 2) return "Tijera";
};

const playRound = function(playerSelection, computerSelection) {
	selection = `||    ${playerSelection}/ ${computerSelection}    `
	if (
	    (playerSelection === "Piedra" && computerSelection === "Tijera") ||
	    (playerSelection === "Tijera" && computerSelection === "Piedra") ||
	    (playerSelection === "Papel" && computerSelection === "Piedra")
	  ) {
	    scorePlayer += 1;
		result = `<h1> ${scorePlayer} / ${scoreComputer}</h1>
		<p>¡Ganaste! ${playerSelection} le gana a ${computerSelection}.</p>`
	  } else if (
	    (computerSelection === "Piedra" && playerSelection === "Tijera") ||
	    (computerSelection === "Tijera" && playerSelection === "Papel") ||
	    (computerSelection === "Papel" && playerSelection === "Piedra")
	  ) {
	    scoreComputer += 1;
	    result = `<h1> ${scorePlayer} / ${scoreComputer}</h1>
		<p>¡Perdiste! ${computerSelection} le gana a ${playerSelection}.</p>`
  	  } else if (playerSelection === computerSelection) {
  	  	result = `<h1>${scorePlayer} / ${scoreComputer}</h1><p>Es un empate. Los dos eligieron ${computerSelection}.</p>`
  	  	ties += 1
  	  }

  	  getResults()
  	  
  	  if (scoreComputer == 5 || scorePlayer == 5) {
  	  	endGame()
  	  }
}

function getResults() {
	const resultRound = document.querySelector('.result-round');
	resultRound.innerHTML = result;
	const displaySelection = document.createElement('span');
	displaySelection.textContent = selection;
	div.appendChild(displaySelection);
}

function getEndResult() {
	if (ties == 5) {
		endResult = `¡Es un empate! Los dos tienen ${scorePlayer} puntos.`
	} else if (scoreComputer == 5) {
		endResult = `La computadora gana con ${scoreComputer} puntos.`
	} else if (scorePlayer = 5) {
		endResult = `Ganaste con ${scorePlayer} puntos.`
	}
}


function endGame() {
  getEndResult()
  container.removeChild(buttons);
  let resultGame = document.querySelector('.end-result');
  resultGame.textContent = endResult;
  const playAgain = document.createElement('p')
  playAgain.textContent = "Juega otra vez";
  playAgain.classList.add('playAgain')
  div.appendChild(playAgain);
 }
 

function refreshPage(event){
    const element = event.target;
    if(element.classList.contains("playAgain")){
        window.location.reload(true);
	}
}



btn1.addEventListener('click', ()=>{playRound("Tijera", computerPlay())});

btn2.addEventListener('click', ()=>{playRound("Papel", computerPlay())});

btn3.addEventListener('click', ()=>{playRound("Piedra", computerPlay())});

document.addEventListener('click', refreshPage);
