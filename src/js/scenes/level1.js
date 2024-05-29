import { Scene } from "excalibur";
import { Car } from "../car";
import { Block } from "../block";
import { Coin } from "../coin";
import { Camera, Actor, BoundingBox, Engine, Font, Label, Vector } from "excalibur";
import { ResourceLoader, Resources } from '../resources';


export class Level1 extends Scene {
    
    onInitialize(engine) {
        console.log("this level is created only once.")
        this.spawnCar()
        this.spawnBlock()
        this.spawnCoin()
    }

    onActivate(ctx) {
        let label = new Label({
            text: 'Skoor',
            pos: new Vector(10, 10),
            font: new Font({
                family: 'verdena',
                size: 48,
            })
        })
        
        this.add(label)
        
    }

    spawnBlock(){
        for (let i = 0; i < 500; i++) {
            const block = new Block(i)
            this.add(block)
            console.log(i)
        }
    }

    spawnCoin(){
        for (let i = 0; i < 500; i++) {
            const coin = new Coin(i)
            this.add(coin)
            console.log(i)
        }
    }

    spawnCar(){
        const car = new Car()
        this.add(car)
    }

    transitionScene(){
        this.engine.goToScene('ending')
    }
}


