input.onButtonPressed(Button.A, function () {
    basic.showNumber(input.temperature())
})
input.onButtonPressed(Button.B, function () {
    basic.showString(" Oi meu nome e M L , eu achei você muito legal ")
    basic.showIcon(IconNames.Heart)
})
basic.showNumber(input.compassHeading())
