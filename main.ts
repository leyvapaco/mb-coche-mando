input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    radio.sendString("arranca")
})
input.onButtonPressed(Button.A, function () {
    radio.sendString("izquierda")
})
input.onButtonPressed(Button.AB, function () {
    radio.sendString("para")
})
input.onButtonPressed(Button.B, function () {
    radio.sendString("derecha")
})
basic.showNumber(1)
radio.setGroup(1)
basic.forever(function () {
    if (input.acceleration(Dimension.Y) < 0) {
        radio.sendString("adelante")
    } else if (input.acceleration(Dimension.Y) > 0) {
        radio.sendString("atras")
    }
    basic.pause(500)
})
