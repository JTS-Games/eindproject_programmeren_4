import { Scene } from "excalibur";
import { Car } from "../car";
import { Block } from "../block";
import { Camera, Actor, BoundingBox, Engine, Font, Label, Vector } from "excalibur";
import { ResourceLoader, Resources } from '../resources';

export class Level1 extends Scene {
    
    onInitialize(engine) {
        console.log("this level is created only once.")
    
    }

    onActivate(ctx) {
        this.spawnCar()
        this.spawnBlock
        let label = new Label({
            text: 'Score: 0',
            pos: new Vector(10, 10),
            font: new Font({
                family: 'verdena',
                size: 48,
            })
        })
        
        this.add(label)
        label.text = 'cheese'
    }

    spawnBlock(){
        const block = new Block()
        this.add(block)
    }

    spawnCar(){
        const car = new Car()
        this.add(car)
    }


}


