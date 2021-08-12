namespace SpriteKind {
    export const Button = SpriteKind.create()
}
function redPress () {
    red.setImage(assets.image`redButtonPush`)
    red.say("Me!")
    red.startEffect(effects.fountain, 500)
    music.playTone(262, music.beat(BeatFraction.Whole))
    pause(500)
    red.setImage(assets.image`redButton`)
    red.say("")
    pause(500)
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (userTurn) {
        if (lights[currentGuess] == 0) {
            currentGuess += 1
            redPress()
            if (info.score() <= currentGuess) {
                info.changeScoreBy(1)
            }
        } else {
            wrongGuess()
        }
    }
    if (currentGuess == lights.length) {
        currentGuess = 0
        userTurn = false
        addLight()
        lightUp()
    }
})
function bluePress () {
    blue.setImage(assets.image`blueButtonPush`)
    blue.say("Me!")
    blue.startEffect(effects.fountain, 500)
    music.playTone(440, music.beat(BeatFraction.Whole))
    pause(500)
    blue.setImage(assets.image`blueButton`)
    blue.say("")
    pause(500)
}
function setButton () {
    red = sprites.create(assets.image`redButton`, SpriteKind.Player)
    red.setPosition(80, 40)
    green = sprites.create(assets.image`greenButton`, SpriteKind.Player)
    green.setPosition(80, 80)
    blue = sprites.create(assets.image`blueButton`, SpriteKind.Player)
    blue.setPosition(60, 60)
    yellow = sprites.create(assets.image`yellowButton`, SpriteKind.Player)
    yellow.setPosition(100, 60)
}
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    if (userTurn) {
        if (lights[currentGuess] == 3) {
            currentGuess += 1
            bluePress()
            if (info.score() <= currentGuess) {
                info.changeScoreBy(1)
            }
        } else {
            wrongGuess()
        }
    }
    if (currentGuess == lights.length) {
        currentGuess = 0
        userTurn = false
        addLight()
        lightUp()
    }
})
function lightUp () {
    for (let value of lights) {
        if (value == 0) {
            redPress()
        } else if (value == 1) {
            yellowPress()
        } else if (value == 2) {
            greenPress()
        } else {
            bluePress()
        }
    }
    userTurn = true
    currentGuess = 0
    game.splash("It is now your turn")
}
function yellowPress () {
    yellow.setImage(assets.image`yellowButtonPush`)
    yellow.say("Me!")
    yellow.startEffect(effects.fountain, 500)
    music.playTone(311, music.beat(BeatFraction.Whole))
    pause(500)
    yellow.setImage(assets.image`yellowButton`)
    yellow.say("")
    pause(500)
}
function addLight () {
    randLight = randint(0, 3)
    lights.push(randLight)
}
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    if (userTurn) {
        if (lights[currentGuess] == 1) {
            currentGuess += 1
            yellowPress()
            if (info.score() <= currentGuess) {
                info.changeScoreBy(1)
            }
        } else {
            wrongGuess()
        }
    }
    if (currentGuess == lights.length) {
        currentGuess = 0
        userTurn = false
        addLight()
        lightUp()
    }
})
function wrongGuess () {
    game.over(false, effects.melt)
    info.setScore(0)
}
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    if (userTurn) {
        if (lights[currentGuess] == 2) {
            currentGuess += 1
            greenPress()
            if (info.score() <= currentGuess) {
                info.changeScoreBy(1)
            }
        } else {
            wrongGuess()
        }
    }
    if (currentGuess == lights.length) {
        currentGuess = 0
        userTurn = false
        addLight()
        lightUp()
    }
})
function greenPress () {
    green.setImage(assets.image`greenButtonPush`)
    green.say("Me!")
    green.startEffect(effects.fountain, 500)
    music.playTone(370, music.beat(BeatFraction.Whole))
    pause(500)
    green.setImage(assets.image`greenButton`)
    green.say("")
    pause(500)
}
let randLight = 0
let yellow: Sprite = null
let green: Sprite = null
let blue: Sprite = null
let currentGuess = 0
let red: Sprite = null
let userTurn = false
let lights: number[] = []
scene.setBackgroundColor(13)
setButton()
lights = []
userTurn = false
addLight()
lightUp()
