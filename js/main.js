let words = ["Kid", "Elephant", "Murder", "France", "Vatican", "Milan", "Mars", "Seaweed", "Venus", "Monaco",];
let hints = ["A baby goat", "A Mammal that cannot jump", "A group of crows", "Statue of Liberty was gifted by", "Smallest country in the world", "Fashion Capital of the world", "The Red Planet", "Traditional wrap for Sushi", "Hottest planet in the solar system", "Second smallest country in the world"]

const inputBox = document.querySelector('#input-box');
const playAgainBtn = document.querySelector('#play-again-button');
const submitBtn = document.querySelector('#button');
const guessesLeft = document.querySelector('#guesses-left');
const hint = document.querySelector(".hint-container")

let message = document.querySelector('#message');
let img = document.querySelector('spaceman');

submitBtn.addEventListener('click', handleSubmit);
playAgainBtn.addEventListener('click', initGame);

let randomIndex = getRandomIndex();
let randomWord = words[randomIndex]
let randomHint = hints[randomIndex]
let numGuesses = 6
let newMessage

initGame();

function getRandomIndex() {
    const randomIndex = Math.floor(Math.random() * words.length);
    return randomIndex;

}



function updateHint() {
    hint.textContent = randomHint
}
console.log(randomHint)
function countTurns() {
    numGuesses--
}

function nextWord() {
    words.splice(randomIndex, 1)
    hints.splice(randomIndex, 1)
    randomIndex = getRandomIndex();
    randomWord = words[randomIndex]
    randomHint = hints[randomIndex]
}

function handleSubmit(event) {
    if (numGuesses === 0) return
    

    if (randomWord.toLowerCase() === inputBox.value.toLowerCase()) {
        newMessage = "Great!"
        nextWord()
    } else {
        newMessage = "LOSER!"
        countTurns()
    }
    render()
}
function checkWin() {
    if (words.length === 0) newMessage = "YOU WON!"
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
    checkWin()
    updateMessage()
    updateCounter()
    setTimeout(() => {
        clearMessage()
        clearInput()
        updateHint()
    }, 2000)
}


function initGame() {
    words = ["Kid", "Elephant", "Murder", "France", "Vatican", "Milan", "Mars", "Seaweed", "Venus", "Monaco",];
    hints = ["A baby goat", "A Mammal that cannot jump", "A group of crows", "Statue of Liberty was gifted by", "Smallest country in the world", "Fashion Capital of the world", "The Red Planet", "Traditional wrap for Sushi", "Hottest planet in the solar system", "Second smallest country in the world"]
    randomIndex = getRandomIndex();
    randomWord = words[randomIndex]
    randomHint = hints[randomIndex]
    numGuesses = 6
    newMessage = ""

    updateHint()
    render()
}



