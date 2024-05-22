import { Scene } from "excalibur";
import { Car } from "../car";

export class Intro extends Scene {
    onInitialize(engine) {
        console.log("this intro is created only once.")
    }

    onActivate(ctx) {
        console.log("the game has switched to this intro.")
    }

}