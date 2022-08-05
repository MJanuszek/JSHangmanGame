// :::: FROM HTML :::::::::::::::::::::::::::::::::::
const checkLetterBtn = document.querySelector(".check-letter");
// button to draw a word:
const selectWord = document.querySelector(".select-word");
const inputLetter = document.querySelector(".input-letter");

// word-to-guess (word in array[]):
const wordToGuess = document.querySelector(".word-to-guess");

// word div letters (one letter per div):
// const wordToPlay = document.querySelectorAll(".letter")
// div to display used letters::
const usedLettersDisplay = document.querySelector(".used-letters");
// ::::::: END FROM HTML :::::::::::::::::::::::::::::::::::

const words = ["panter", "tiger", "elephant"];

const currentWord = ["pantera"];


wordToGuess.textContent = currentWord[0];

// selectWord()

const selectWordToPlay = () => {

}






// 
const checkLetter = () => {
    // console.log(inputLetter.value);
    for(let i=0; i< currentWord[0].length; i++) {
        if (inputLetter.value === i) {
            console.log(i)
        }
    }

    // add letter to used letters:
    usedLettersDisplay.textContent += inputLetter.value + " ";
    // clear input value::
    inputLetter.value = "";
}


selectWord.addEventListener("click", selectWordToPlay);
checkLetterBtn.addEventListener("click", checkLetter);