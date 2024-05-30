import '../css/style.css'
import { Camera, Actor, BoundingBox, Engine, Font, Label, Vector, Color } from "excalibur";
import { ResourceLoader, Resources } from './resources.js';
import { Intro } from './scenes/intro.js';
import { Level1 } from './scenes/level1.js';
import { Ending } from './scenes/ending.js';

export class Game extends Engine {
    skoor = 0
    constructor() {
        super({ 
            width: 1600,
            height: 900,
            maxFps: 60,
            backgroundColor: Color.LightGray
         })
        this.start(ResourceLoader).then(() => this.startGame())
    }

    startGame() {
        this.add('intro', new Intro());
        this.add('level1', new Level1());
        this.add('ending', new Ending());
        this.goToScene('intro');
        console.log("start de game!");
    }   
}

new Game()