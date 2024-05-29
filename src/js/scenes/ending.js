import { Scene, Camera, Actor, BoundingBox, Engine, Font, Label, Vector, Keys  } from "excalibur";
import { ResourceLoader ,Resources} from "../resources"

export class Ending extends Scene {
    onInitialize(engine) {

    }

    onPreUpdate(engine) {
        if (engine.input.keyboard.isHeld(Keys.Space)) {
            this.engine.goToScene('intro')
          }
    }

    onActivate(ctx) {
        console.log("kachow")
        let label = new Label({
            text: 'Your skoor is: 0',
            pos: new Vector(20, 10),
            font: new Font({
                family: 'verdena',
                size: 108,
            })
        })
        
        this.add(label)

        let label2 = new Label({
            text: 'Press space to play again',
            pos: new Vector(20, 500),
            font: new Font({
                family: 'verdena',
                size: 108,
            })
        })
        
        this.add(label2)
    }
}