import '../css/style.css'
import { Actor, Engine, Font, Label, Vector } from "excalibur";
import { ResourceLoader, Resources } from './resources.js';
import { Car } from './car.js'

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
        this.spawnCar()
    }

    spawnCar(){
        const car = new Car()
        this.add(car)
    }
}

new Game()