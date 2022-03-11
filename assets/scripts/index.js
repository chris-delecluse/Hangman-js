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

let currLife = 7

createSpanForLetter(wordSplit, spans)

console.log(wordSplit); // a del

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