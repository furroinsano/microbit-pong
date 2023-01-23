input.onButtonPressed(Button.A, function () {
    if (PosicionPaleta > 0) {
        Paleta1.move(-1)
        Paleta2.move(-1)
        PosisionPaleta += -1
    }
})
input.onButtonPressed(Button.B, function () {
    if (PosicionPaleta > 3) {
        Paleta1.move(1)
        Paleta2.move(1)
        PosisionPaleta += 1
    }
})
let PosisionPaleta = 0
let PosicionPaleta = 0
let Paleta2: game.LedSprite = null
let Paleta1: game.LedSprite = null
Paleta1 = game.createSprite(2, 4)
Paleta2 = game.createSprite(3, 4)
PosicionPaleta = 2
basic.forever(function () {
	
})
