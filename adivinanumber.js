// vamos a crear la logica del juego

//declaracion de variables

//generamos el numero aleatorio
let randomNumber = Math.floor(Math.random()*100)+ 1;

const guesses = document.querySelector(".guesses");
const lastResult = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");

//GUardamos la referencia a los elementos input con las
//clases especificados
const guessSubmit=document.querySelector(".guessSubmit");
const guessField= document.querySelector(".guessField");

let guessCount= 1;
let resetButton ;

function checkGuess(){
   
    let userGuess = Number(guessField.value);
    if(userGuess=== randomNumber ){
        lastResult.textContent="Felicitari";
    lastResult.style.backgroundColor="green";
    lowOrHi.textContent="";
    setGameOver();
         } else if(guessCount===10){
    lastResult.textContent="game over";
    setGameOver();
         } else { lastResult.textContent= "incorect";
    lastResult.style.backgroundColor="red";
    if(userGuess<randomNumber){
        lowOrHi.textContent= "nr este prea mic";
    } else if(userGuess>randomNumber){
        lowOrHi.textContent="nr este prea mare";
    }
         }
         guessCount++;
         guessField.value = "";
         guessField.focus();

}
guessSubmit.addEventListener("click",checkGuess);

function setGameOver(){
 guessField.disabled=true;
 guessSubmit.disabled=true;
 resetButton = document.createElement("button");
 resetButton.textContent="incearca din nou";
 resetButton.style.backgroundColor="white";
 resetButton.style.color=" #b13147";
 resetButton.style.padding="10px";
 resetButton.style.border="1px solid green";
 resetButton.style.borderRadius="5px";
 document.body.append(resetButton);
 resetButton.addEventListener("click", resetGame);

}
function resetGame(){
    guessCount = 1;
    const resetParas = document.querySelectorAll(".resultParas p");

    guessField.disabled= false;
    guessSubmit.disabled = false;
    guessField.value ="";
    guessField.focus();

    lastResult.style.backgroundColor ="pink";
    randomNumber= Math.floor(Math.random()*100)+1;
}









