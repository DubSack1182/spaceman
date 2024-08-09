const words = ["Kid", "Elephant", "Murder", "France", "Vatican", "Milan", "Mars", "Seaweed", "Venus", "Monaco",];

const inputBox = document.querySelector('#input-box');
const playAgainBtn = document.querySelector('#play-again-button');
const submitBtn = document.querySelector('#button');
const guessesLeft = document.querySelector('#guesses-left');
let message = document.querySelector('#message');
let img = document.querySelector('spaceman');

submitBtn.addEventListener('click', handleSubmit);
playAgainBtn.addEventListener('click', initGame);

const randomWord = getRandomWord();

let numGuesses = 6
let newMessage

initGame();

function getRandomWord() {
    const randomIndex = Math.floor(Math.random() * words.length);
    return words[randomIndex];

    incorrectGuesses = [];
    remainingAttempts = MAX_ATTEMPTS;

}

console.log(randomWord);

function countTurns() {
    // img.src ="Spaceman-Images/spaceman-6.png";

    // inputBox.forEach(function (element) {
    // element.disabled = false;
    // });
    // 
    // let createBoxesForHiddenWord = '';
    // for (let i = 0; i < word.length; i++) {
    // createBoxesForHiddenWord += `<input type="text" value='' disabled>`;
    // }

    numGuesses--
}

function handleSubmit(event) {
    if (numGuesses === 0) return
    console.log(inputBox.value)

    if (randomWord.toLowerCase() === inputBox.value.toLowerCase()) {
        newMessage = "Great!"
    } else {
        newMessage = "LOSER!"
        countTurns()
    }
    render()
}

function clearMessage() {
    message.textContent = ""
}
function updateMessage() {
    message.textContent = newMessage
}
function updateCounter() {
    guessesLeft.innerHTML = 'Guesses Left:' + numGuesses;
}
function clearInput() {
    inputBox.value = ""
}
function checkCounter() {
    if (numGuesses === 0) newMessage = "Game Over!!"
}

function render() {
    checkCounter()
    updateMessage()
    updateCounter()
    setTimeout(() => {
        clearMessage()
        clearInput()
    }, 2000)
}


function initGame() {
    // inputBox.querySelectorAll('input')[i].value = buttonValue;
    // message.innerText = 'Word Correct!';
    // inputBox.push(buttonValue);
    // if (word.length === inputBox.length) {
    // message.innerText = 'Words guessed! You won!';
    // alphaBtnInput.forEach(function (element) {
    // element.disabled = true;
    // });
    // 
    // }else {
    // maxGuesses--;
    // guessesLeft.innerText = 'Guesses Left:' + maxGuesses;
    // message.innerText = 'Wrong Letter.';
    // 
    // if (maxGuesses <= 0) {
    // message.innerText = 'Game Over!';
    // guessesLeft.innerText = 'Click "Generate Word" to play again.';
    // alphaBtnInput.forEach(function (element) {
    // element.disabled = true;
    // });
    // img.src = 'Spaceman-Images/spaceman-5.png';
    // 
    // }
    // };
}

