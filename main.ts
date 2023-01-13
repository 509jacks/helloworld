input.onButtonPressed(Button.A, function () {
    basic.showString("I'm your mom")
    basic.showIcon(IconNames.Duck)
})
input.onButtonPressed(Button.B, function () {
    basic.showString("I'm your dad")
    basic.showLeds(`
        . # . # .
        # . . . #
        . # . # .
        . . . . .
        . # # # .
        `)
})
basic.showString("Avanti is suss")
basic.showIcon(IconNames.Happy)
basic.forever(function () {
    music.playTone(494, music.beat(BeatFraction.Half))
    music.playMelody("E F C5 E D A D E ", 500)
    music.startMelody(music.builtInMelody(Melodies.Wawawawaa), MelodyOptions.Forever)
})
