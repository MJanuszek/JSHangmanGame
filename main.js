// :::: FROM HTML :::::::::::::::::::::::::::::::::::
// lives:::
let lives = document.querySelector(".lives");
const checkLetterBtn = document.querySelector(".check-letter");
// button to draw a word:
const selectWord = document.querySelector(".select-word");
const inputLetter = document.querySelector(".input-letter");

// word-to-guess (word in array[]):
let wordToGuess = document.querySelector(".word-to-guess");

// word div letters (one letter per div):
// const wordToPlay = document.querySelectorAll(".letter")
// div to display used letters::
const usedLettersDisplay = document.querySelector(".used-letters");
// game list div for img::::
const gameLost = document.querySelector(".game-lost")
// ::::::: END FROM HTML :::::::::::::::::::::::::::::::::::

// WORDS BANK::::::::::::
const words = ["panter", "tiger", "elephant", "panda", "parrot", "bat", "donkey", "horse", "bee"];
let currentWord = "";
let letterChecked = [];
let allLettersInWord = 0;
// -------------------------------------------

// selectWord()
const selectWordToPlay = () => {
    // clean slate new game :::
    checkLetterBtn.disabled = false;
    inputLetter.value = "";
    letterChecked = [];
    allLettersInWord = 0;
    usedLettersDisplay.textContent = "";
    document.getElementById("end-img").style.backgroundImage = null;
// ------------------------------
    // prevent to draw same word twice::: 
    wordToGuess.textContent = "";

    // draw random word from array::::::::::
    currentWord = words[Math.floor(Math.random()*words.length)];
    console.log(currentWord);

    // create letter fields from draw word::::
    for (let i=0; i<currentWord.length; i++){
        let letterField = document.createElement("div");
        letterField.classList.add("circle");
        wordToGuess.appendChild(letterField);
        letterField.setAttribute("letter", currentWord[i]);
    } 

    // after drawing word (its length is relevant) create life points:::
    createLifes()
}
// -------------------------------------------------------------------

// compare letter from input with letters in draw word::::::
const checkLetter = () => {
    // if letter already checked:
    for (let i = 0; i< letterChecked.length; i++) {
        if (inputLetter.value === letterChecked[i]){
            console.log("Letter already checked, try different letter");
            inputLetter.value = "";
            return
        }
    }
    // if input is empty::::
    if (inputLetter.value === "") {
        console.log ("Letter field is empty");
        return
    }

    // if input is type number::::

    if (inputLetter.value * 1) {
        console.log ("Use letters not numbers");
        inputLetter.value = "";
        return
    }

    let foundLetter = false;
    
    // console.log(inputLetter.value);
    for(let i=0; i < wordToGuess.children.length; i++) {
        if (inputLetter.value === wordToGuess.children[i].getAttribute("letter")) {
            wordToGuess.children[i].textContent = wordToGuess.children[i].getAttribute("letter");
            foundLetter = true;
            allLettersInWord++; 
         }

         // end game win img:::::::
         if(allLettersInWord === wordToGuess.children.length) {
            console.log("All letters found");
            document.getElementById("end-img").style.backgroundImage = "url('img/rainbow.jpg')";
            checkLetterBtn.disabled = true;
        }
    }

    // ------------------------------------------------------------
    // remove life if letter is incorrect::::
    if (foundLetter === false) {
        console.log(`Brak litery ${inputLetter.value} `);
        // lives amount equals 0 = game over::::
        if (lives.children.length > 0) {
            lives.removeChild(lives.children[0]);
        }
        if (lives.children.length === 0){
            console.log("Game over");
            // show skull img as game over (lost) picture:::::
            document.getElementById("end-img").style.backgroundImage = "url('img/skull.png')"
             return
        }
        
    }
    // add letter to used letters:
    letterChecked.push(inputLetter.value); 
    usedLettersDisplay.textContent = letterChecked ;
    // clear input value::
    inputLetter.value = "";

    // end of checkLetter();
}

// --------------------------------------------------------------------------
// ---------------------------

// create life points accordingly to word to guess length:::::::::
const createLifes = () => {

        let number = lives.children.length;

        for (let i = 0; i<number; i++){
            lives.removeChild(lives.children[0]);
            console.log(lives.children.length);
        }
    
    if (currentWord.length <4) {
        for (i=0; i<2; i++) {
         let life = document.createElement("div");
         life.classList.add("life");
         lives.appendChild(life);
        }
     } else if (currentWord.length >=4 && currentWord.length<=7) {
         for (i=0; i<3; i++) {
             let life = document.createElement("div");
             life.classList.add("life");
             lives.appendChild(life);
            }
     } else if (currentWord.length > 7) {
        for (i=0; i<5; i++) {
            let life = document.createElement("div");
            life.classList.add("life");
            lives.appendChild(life);
           }
    }
}
// -------------------------------------------------------------------

// event listeners:::::
selectWord.addEventListener("click", selectWordToPlay);
checkLetterBtn.addEventListener("click", checkLetter);
