import { GameScene} from './scene.js';

export const game_config = {
    type: Phaser.AUTO,
    width: 96*4,
    height: 96*4,
    backgroundColor: '#4EADF5',
    scene: GameScene,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 200 }
        }
    },
    scale: {
        mode: Phaser.Scale.FIT,
    }
};