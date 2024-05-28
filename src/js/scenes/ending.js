import { Scene, Camera, Actor, BoundingBox, Engine, Font, Label, Vector  } from "excalibur";
import { ResourceLoader ,Resources} from "../resources"

export class Ending extends Scene {
    onInitialize(engine) {

    }

    onActivate(ctx) {
        console.log("kachow")
    }
}