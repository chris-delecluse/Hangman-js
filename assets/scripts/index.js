const words = [
    "python",
    "javascript",
    "mongodb",
    "json",
    "java",
    "html",
    "css",
    "c",
    "csharp",
    "golang",
    "kotlin",
    "php",
    "sql",
    "ruby"
]

const wordToGuess = randomWord(words)
const wordSplit = wordToGuess.toUpperCase().split('')
const userLetter = []
const inputText = document.getElementById("letter")
const spans = document.getElementsByClassName("box__text")[0]
const keyboard = document.getElementsByClassName("keyboard__letter")

let currLife = 7

createSpanForLetter(wordSplit, spans)

inputText.addEventListener("keydown", (e) => {
    let inputValue = inputText.value.toUpperCase()

    if (e.key === 'Enter') {
        if (wordToGuess.toUpperCase().match(inputValue)) {
            wordSplit.forEach((el, key) => {
                if (inputValue === el && userLetter[key] === undefined) {
                    userLetter[key] = el
                    document.getElementsByTagName("span")[key].innerHTML = el
                }
            });
        } else {
            currLife--
            console.log(`Remaining life : ${currLife}`)
        }
        e.preventDefault();
        gameStatus(wordSplit, userLetter, currLife)
        inputText.value = ''
    }

    stateOfLife(currLife)
})

for (let i = 0; i < keyboard.length; i++) {
    keyboard[i].addEventListener("click", () => {

        if (wordToGuess.includes(keyboard[i].value)) {
            wordSplit.forEach((el, k) => {
                if (keyboard[i].value.toUpperCase() === el) {
                    userLetter[k] = el
                    document.getElementsByTagName("span")[k].innerHTML = el
                }
            })
            keyboard[i].setAttribute('disabled', 'true')
            keyboard[i].style.display = 'none'

        } else {
            currLife--
            keyboard[i].setAttribute('disabled', 'true')
            keyboard[i].style.display = 'none'
        }

        gameStatus(wordSplit, userLetter, currLife)
        stateOfLife(currLife)
    })
}