export class GameScene extends Phaser.Scene {
    constructor () {
        super("scene")
    }

    preload () {
        this.load.image('tiles', 'assets/foreground_grass_dirt_tile.png')
        this.load.tilemapTiledJSON('tilemap', 'assets/games.json')

    }

    create () {
        const map = this.make.tilemap({ key: 'tilemap'})
        const tileset = map.addTilesetImage('foreground_grass_dirt_tile', 'tiles')

        map.createLayer('ground', tileset)
    }

    update () {

    }
}