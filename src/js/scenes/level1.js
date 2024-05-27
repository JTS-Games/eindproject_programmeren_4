import { Scene } from "excalibur";
import { Car } from "../car";
import { Camera, Actor, BoundingBox, Engine, Font, Label, Vector } from "excalibur";
import { ResourceLoader, Resources } from '../resources';

let blockspeed = 10;

export class Level1 extends Scene {
    onInitialize(engine) {
        console.log("this level is created only once.")
    }

    onActivate(ctx) {
        this.spawnCar()

        for (let i = 0; i < 1000; i++) {
            this.spawnBlock(i)
        }
    }

    spawnCar(){
        const car = new Car()
        this.add(car)
    }

    spawnBlock(i){
        const fish = new Actor()
        fish.graphics.use(Resources.Fish.toSprite())
        fish.pos = new Vector(0+i*100, Math.random()*1080)
        fish.vel = new Vector(-blockspeed, 0)
        blockspeed += 2
        this.add(fish)
    }
}

function spawnCar() {
    throw new Error("Function not implemented.");
}
