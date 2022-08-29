// :::: FROM HTML :::::::::::::::::::::::::::::::::::
// lives:::
const lives = document.querySelectorAll(".life");
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


const words = ["panter", "tiger", "elephant"];

const currentWord = "pantera";


// selectWord()
const selectWordToPlay = () => {

    for (let i =0; i<currentWord.length; i++){
        const letterField = document.createElement("div");
        letterField.classList.add("circle");
        wordToGuess.appendChild(letterField);
        letterField.setAttribute("letter", currentWord[i]);
    } 

    // if (wordToGuess){
    //     selectWord.disabled = true;
    //     const newGameBtn = document.createElement("button");
    //     document.body.appendChild(newGameBtn);
    //     newGameBtn.classList.add("button");
    //     newGameBtn.textContent = "Zacznij nową grę";
    //     newGameBtn.addEventListener("click", startNewGame = () => {
    //             console.log("ok");
    //             wordToGuess.textContent = "the end";
    //             selectWord.disabled = false;

    //     });
       
    // };
   
}



// 
const checkLetter = () => {
    // console.log(inputLetter.value);
    for(let i=0; i< currentWord.length; i++) {
        if (inputLetter.value === currentWord[i]) {
            console.log("ok");

         } else {
            console.log("nie ma")
         } 
    } 

    // add letter to used letters:
    usedLettersDisplay.textContent += inputLetter.value + " ";
    // clear input value::
    inputLetter.value = "";
}


selectWord.addEventListener("click", selectWordToPlay);
checkLetterBtn.addEventListener("click", checkLetter);
