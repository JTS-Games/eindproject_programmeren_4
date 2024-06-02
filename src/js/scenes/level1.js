import { Scene } from "excalibur";
import { Car } from "../car";
import { Block } from "../block";
import { Coin } from "../coin";
import { Camera, Actor, BoundingBox, Engine, Font, Label, Vector } from "excalibur";
import { ResourceLoader, Resources } from '../resources';


export class Level1 extends Scene {

    label
    
    onInitialize(engine) {
        console.log("this level is created only once.")
        this.spawnCar()
        this.spawnCoin()
        this.spawnBlock()

        this.label = new Label({
            text: 'Skoor',
            pos: new Vector(10, 10),
            font: new Font({
                family: 'comic sans ms',
                size: 48,
            })
        })
        
        this.add(this.label)
        
    }

    onActivate(ctx) {
        this.engine.skoor = 0
        this.label.text = "Skoor: " + this.engine.skoor
    }

    addPoint(){
        this.engine.skoor += 1
        this.label.text = "Skoor: " + this.engine.skoor
    }

    spawnBlock(){
        for (let i = 0; i < 300; i++) {
            const block = new Block(i)
            this.add(block) 
        }
    }

    spawnCoin(){
        for (let i = 0; i < 300; i++) {
            const coin = new Coin(i)
            this.add(coin)
        }
    }

    createScore(){
        this.skoor = 0
    }

    spawnCar(){
        const car = new Car()
        this.add(car)
    }

    transitionScene(){
        this.engine.goToScene('ending')
    }
}


