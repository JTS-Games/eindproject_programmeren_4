import '../css/style.css'
import { Actor, Engine, Font, Label, Vector } from "excalibur";
import { ResourceLoader, Resources } from './resources.js';
import { Fish } from './fish.js'
import { Bullet } from './bullet.js';

export class Game extends Engine {

    constructor() {
        super({ 
            width: 1600,
            height: 900,
            maxFps: 60,
         })
        this.start(ResourceLoader).then(() => this.startGame())
    }

    startGame() {
        console.log("start de game!")
        this.spawnFish()
    }

    spawnFish(){
        const fish = new Fish()
        this.add(fish)
    }
}

new Game()
