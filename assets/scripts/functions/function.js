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
            drawRope()
            break
        case 5 : 
            drawHead()
            break
        case 4 :
            drawTorso()
            break
        case 3 :
            drawLeftArm()
            break
        case 2 :
            drawRightArm()
            break
        case 1 :
            drawLeftLeg()
            break
        case 0 :
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
        for (let i = 0; i < arr2.length; i++) {
            document.getElementsByTagName("span")[i].style.color = "#91F086"
        }

        document.getElementById("letter").setAttribute('disabled', true)
        resetPage(3000)

    } else if (currLife <= 0) {
        arr1.forEach((el, k) => {
            arr2[k] = el
            document.getElementsByTagName("span")[k].innerHTML = el
            document.getElementsByTagName("span")[k].style.color = "#ED2939"
        })

        document.getElementById("letter").setAttribute('disabled', true)
        resetPage(3000)

    } else {
        console.log(`Error..`);
    }
}