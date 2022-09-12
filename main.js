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
// ::::::: END FROM HTML :::::::::::::::::::::::::::::::::::

// WORDS BANK::::::::::::
const words = ["panter", "tiger", "elephant", "panda", "parrot", "bat", "donkey", "SeaHorse", "bee"];
let currentWord = "";


// selectWord()
const selectWordToPlay = () => {

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

    createLifes()

   
}

// compare letter from input with letters in draw word::::::
const checkLetter = () => {
    // console.log(inputLetter.value);
    for(let i=0; i < wordToGuess.children.length; i++) {
        if (inputLetter.value === wordToGuess.children[i].getAttribute("letter")) {
           
            wordToGuess.children[i].textContent = wordToGuess.children[i].getAttribute("letter");

         } 
        //  JEŚLI słowo nie występyje usuń punkt life:::::::::::
         else if(inputLetter.value !== wordToGuess.children[i].getAttribute("letter")) {
            console.log(`Brak litery ${inputLetter.value} `);
            // lives.pop()
         }


        // end of For loop::::::::::::::::
    } 

    // add letter to used letters:
    usedLettersDisplay.textContent += inputLetter.value + " ";
    // clear input value::
    inputLetter.value = "";
}





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

selectWord.addEventListener("click", selectWordToPlay);
checkLetterBtn.addEventListener("click", checkLetter);
