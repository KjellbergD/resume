import { GameScene } from './scene.js';

export const gameSize = {
    width: 1080 * (window.innerWidth / window.innerHeight),
    height: 1080
}

export const game_config = {
    type: Phaser.AUTO,
    width: gameSize.width,
    height: gameSize.height,
    backgroundColor: '#4EADF5',
    scene: GameScene,
    physics: {
        default: 'matter',
        matter: {
            gravity: { y: 1 },
            enableSleeping: true,
            debug: {
                showBody: true,
                showStaticBody: true
            }
        }
    },
    scale: {
        mode: Phaser.Scale.FIT,
    }
};