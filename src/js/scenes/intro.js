import { Scene, Camera, Actor, BoundingBox, Engine, Font, Label, Vector  } from "excalibur";
import { ResourceLoader ,Resources} from "../resources"

export class Intro extends Scene {
    onInitialize(engine) {
        this.graphics.use(Resources.SuperRacersMenu.toSprite())
        this.pos.x = engine.drawWidth / 4
        this.pos.y = engine.drawHeight / 2  
    }

    onActivate(ctx) {
        console.log("kachow")
    }

}