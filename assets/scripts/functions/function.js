const randomWord = (arr) => {

    return arr[Math.floor(Math.random() * arr.length)]

}

const createSpanForLetter = (arr, elementHtml) => {

    for (let i = 0; i < arr.length; i++) {
        let span = document.createElement("span")
        span.innerHTML = '*'
        elementHtml.appendChild(span)
    }

}

const stateOfLife = (currLife) => {

    switch (currLife) {

        case 6 : 
            drawHead()
            break
        case 5 :
            drawTorso()
            break
        case 4 :
            drawLeftArm()
            break
        case 3 :
            drawRightArm()
            break
        case 2 :
            drawLeftLeg()
            break
        case 1 :
            drawRightLeg()
            break
        default :
            console.log(`Be carefull of your life :p`)
    }
}

const areSame = (arrOfword, letterFound) => {
    
    let count = arrOfword.length

    for (let i = 0; i < arrOfword.length; i++) {
        if (arrOfword[i] != letterFound[i]) {
            count--
        }
    }

    if (count === arrOfword.length) {
        return true
    } else {
        return false
    }
}

const resetPage = (timeoutPeriod) => {

    setTimeout('location.reload(true);', timeoutPeriod);
}

const gameStatus = (arr1, arr2, currLife) => {

    let bool = areSame(arr1, arr2)

    if (bool === true && currLife > 0) {

        resetPage(10000)
    } else if (currLife <= 0) {

        resetPage(5000)
    } else {
        console.log(`Error..`);
    }
}