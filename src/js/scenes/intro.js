import { Scene, Camera, Actor, BoundingBox, Engine, Font, Label, Vector, Keys  } from "excalibur";
import { ResourceLoader ,Resources} from "../resources"
import { Level1 } from "./level1";


export class Intro extends Scene {
    onInitialize(engine) {

    }
    onPreUpdate(engine) {
        if (engine.input.keyboard.isHeld(Keys.Space)) {
            this.engine.goToScene('level1')
          }
    }

    onActivate(ctx) {
        console.log("kachow")
        let label = new Label({
            text: 'Best game evur!!1!',
            pos: new Vector(50, 50),
            font: new Font({
                family: 'verdena',
                size: 108,
            })
        })
        
        this.add(label)

        let label2 = new Label({
            text: 'Press space to start',
            pos: new Vector(50, 700),
            font: new Font({
                family: 'verdena',
                size: 108,
            })
        })
        
        this.add(label2)
    }
    

}