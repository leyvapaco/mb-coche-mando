radio.onReceivedNumber(function (receivedNumber) {
    basic.showNumber(receivedNumber)
    basic.pause(1000)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    if (index % 2 == 0) {
        radio.sendString("arranca")
    } else {
        radio.sendString("para")
    }
    index += 1
})
input.onButtonPressed(Button.A, function () {
    radio.sendString("izquierda")
})
input.onButtonPressed(Button.AB, function () {
    radio.sendString("turbo")
})
input.onButtonPressed(Button.B, function () {
    radio.sendString("derecha")
})
let index = 0
radio.setGroup(86)
index = 2
basic.forever(function () {
    if (input.acceleration(Dimension.Y) < -100) {
        radio.sendString("adelante")
    } else if (input.acceleration(Dimension.Y) > 100) {
        radio.sendString("atras")
    }
    basic.pause(500)
})
