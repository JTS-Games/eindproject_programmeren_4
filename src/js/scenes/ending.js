import { Scene, Camera, Actor, BoundingBox, Engine, Font, Label, Vector, Keys  } from "excalibur";
import { ResourceLoader ,Resources} from "../resources"

export class Ending extends Scene {
    onInitialize(engine) {
        console.log("kachow")
            this.label = new Label({
            // @ts-ignore
            text: 'Iets werkt hier niet :(',
            pos: new Vector(20, 10),
            font: new Font({
                family: 'verdena',
                size: 108,
            })
        })
        
        this.add(this.label)

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

    onPreUpdate(engine) {
        if (engine.input.keyboard.isHeld(Keys.Space)) {
            this.engine.goToScene('intro')
          }
    }

    onActivate(ctx) {
        /// skoor invullen
        // @ts-ignore
        this.label.text = 'Your skoor is: ' + this.engine.skoor
    }
}