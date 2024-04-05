let X = 0
input.onGesture(Gesture.Shake, function () {
    X = randint(0, 10)
    if (X == 0) {
        basic.showIcon(IconNames.Happy)
    } else if (X == 1) {
        basic.showIcon(IconNames.Sad)
    } else {
        basic.showIcon(IconNames.Surprised)
    }
})
