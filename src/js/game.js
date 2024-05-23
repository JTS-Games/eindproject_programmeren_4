import '../css/style.css'
import { Actor, Engine, Font, Label, Vector } from "excalibur";
import { ResourceLoader, Resources } from './resources.js';
import { Intro } from './scenes/intro.js';
import { Level1 } from './scenes/level1.js';

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
       this.add('intro', new Intro())
        this.add('level1', new Level1())
        this.goToScene('level1')
        console.log("start de game!")
    }   
}

new Game()