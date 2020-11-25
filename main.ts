info.onCountdownEnd(function () {
    game.over(true, effects.smiles)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    otherSprite.destroy(effects.bubbles, 500)
    info.changeScoreBy(1)
    music.baDing.play()
})
let mySprite2: Sprite = null
game.splash("pug run!", "by daphne")
scene.setBackgroundColor(7)
let mySprite = sprites.create(img`
    . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . 
    . . . . . . f f e e e f f . 
    . e . . . . f e e e e e f . 
    e e e . . . . e f e e f . . 
    e . e e e e e e e f f e . . 
    . . e e e e e e f e e f . . 
    . . e e e e e e . . . . . . 
    . . e e . . e e . . . . . . 
    . . e . . . . e . . . . . . 
    . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite)
mySprite.setFlag(SpriteFlag.StayInScreen, true)
info.setScore(0)
info.startCountdown(20)
forever(function () {
    music.playMelody("G B A G C5 B A B ", 196)
})
game.onUpdateInterval(500, function () {
    mySprite2 = sprites.create(img`
        . . . . . . . . 
        . e e . . e e . 
        e e e e e e e e 
        e e e e e e e e 
        . e e . . e e . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        `, SpriteKind.Food)
    mySprite2.setPosition(randint(10, 150), randint(10, 110))
})
