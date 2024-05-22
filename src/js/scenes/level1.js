import { Scene } from "excalibur";
import { Car } from "../car";

export class Level1 extends Scene {
    onInitialize(engine) {
        console.log("this level is created only once.")
    }

    onActivate(ctx) {
        this.spawnCar()
    }


    spawnCar(){
        const car = new Car()
        this.add(car)
    }
}

function spawnCar() {
    throw new Error("Function not implemented.");
}
