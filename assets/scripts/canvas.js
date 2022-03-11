const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

const draw = (() => {
    ctx.fillStyle = "#FF6E40"
    ctx.fillRect(0, 40, 110, 5)
    ctx.fillRect(0, 40, 5, 220)
    ctx.fillRect(110, 40, 5, 40)
})()

const drawHead = () => {
    ctx.fillStyle = "#787373"
    ctx.beginPath()
    ctx.arc(112, 110, 25, 0, Math.PI * 2, false)
    ctx.fill()
}

const drawTorso = () => {
    ctx.fillStyle = "#787373"
    ctx.fillRect(110, 140, 10, 46)
}

const drawLeftArm = () => {
    ctx.strokeStyle = "#787373"
    ctx.beginPath()
    ctx.moveTo(111, 142)
    ctx.lineTo(80, 170)
    ctx.lineWidth = "5"
    ctx.stroke()

    ctx.fillStyle = "#FFB6C1"
    ctx.fillRect(72, 173, 5, 5)
}

const drawRightArm = () => {
    ctx.strokeStyle = "#787373"
    ctx.beginPath()
    ctx.moveTo(119, 142)
    ctx.lineTo(153, 170)
    ctx.lineWidth = "5"
    ctx.stroke()

    ctx.fillStyle = "#FFB6C1"
    ctx.fillRect(155, 173, 5, 5)
}

const drawLeftLeg = () => {
    ctx.strokeStyle = "#787373"
    ctx.beginPath()
    ctx.moveTo(113, 185)
    ctx.lineTo(100, 225)
    ctx.lineWidth = "5"
    ctx.stroke()

    ctx.strokeStyle = "#787373"
    ctx.beginPath()
    ctx.moveTo(118, 185)
    ctx.lineTo(100, 225)
    ctx.lineWidth = "5"
    ctx.stroke()

    ctx.fillStyle = "#FFB6C1"
    ctx.fillRect(95, 229, 5, 5)
}

const drawRightLeg = () => {
    ctx.strokeStyle = "#787373"
    ctx.beginPath()
    ctx.moveTo(118, 185)
    ctx.lineTo(130, 225)
    ctx.lineWidth = "5"
    ctx.stroke()

    ctx.strokeStyle = "#787373"
    ctx.beginPath()
    ctx.moveTo(113, 185)
    ctx.lineTo(130, 225)
    ctx.lineWidth = "5"
    ctx.stroke()

    ctx.fillStyle = "#FFB6C1"
    ctx.fillRect(130, 229, 5, 5)
}