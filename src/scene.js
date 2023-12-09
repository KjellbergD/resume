export class GameScene extends Phaser.Scene {

    constructor () {
        super("scene")
    }

    init () {
        this.cursors = this.input.keyboard.createCursorKeys()
    }

    preload () {
        this.load.atlas('character', 'assets/character.png', 'assets/character.json')
        this.load.image('tiles', 'assets/foreground_grass_dirt_tile.png')
        this.load.tilemapTiledJSON('tilemap', 'assets/games.json')
    }

    create () {
        this.createwalkingAnimation()
        const map = this.make.tilemap({ key: 'tilemap'})
        const tileset = map.addTilesetImage('foreground_grass_dirt_tile', 'tiles')
        const ground = map.createLayer('ground', tileset)
        ground.setCollisionByProperty({ collides: true})
        this.matter.world.convertTilemapLayer(ground)

        const { width, height } = this.scale
        this.character = this.matter.add.sprite(width * 0.5, height * 0.5, 'character')
            .play('idle')
            .setFixedRotation()

        this.cameras.main.startFollow(this.character)
    }

    update () {
        if (this.cursors.left.isDown) {
            this.character.setVelocityX(-2)
            this.character.play('walk', true)
        } else if (this.cursors.right.isDown) {
            this.character.setVelocityX(2)
            this.character.play('walk', true)
        } else {
            this.character.setVelocityX(0)
            this.character.play('idle', true)
        }

        const spaceJustPressed = Phaser.Input.Keyboard.JustDown(this.cursors.space)
        
        if (spaceJustPressed) {
            this.character.setVelocityY(-5)
        }
    }

    createwalkingAnimation () {
        this.anims.create({
            key: 'idle',
            frames: [{ key: 'character', frame: 'sprite_0.png'}]
        })
        this.anims.create({
            key: 'walk',
            frameRate: 20,
            frames: this.anims.generateFrameNames('character', { start: 0, end: 6, prefix: 'sprite_', suffix: '.png'}),
            repeat: -1,
        })
    }
}