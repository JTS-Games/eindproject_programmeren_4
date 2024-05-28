import { Scene } from "excalibur";
import { Car } from "../car";
import { Block } from "../block";
import { Camera, Actor, BoundingBox, Engine, Font, Label, Vector } from "excalibur";
import { ResourceLoader, Resources } from '../resources';


export class Level1 extends Scene {
    
    onInitialize(engine) {
        console.log("this level is created only once.")
        this.spawnCar()
        this.spawnBlock()
    }

    onActivate(ctx) {
        let label = new Label({
            text: 'Score: 0',
            pos: new Vector(10, 10),
            font: new Font({
                family: 'verdena',
                size: 48,
            })
        })
        
        this.add(label)
        label.text = 'Trans rights'
        
    }

    spawnBlock(){
        for (let i = 0; i < 1000; i++) {
            const block = new Block(i)
            this.add(block)
            console.log(i)
        }
    }

    spawnCar(){
        const car = new Car()
        this.add(car)
    }


}


