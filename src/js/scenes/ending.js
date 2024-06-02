import { Scene, Camera, Actor, BoundingBox, Engine, Font, Label, Vector, Keys  } from "excalibur";
import { ResourceLoader ,Resources} from "../resources"

let highSkoor = 0
export class Ending extends Scene {
    onInitialize(engine) {
            this.label = new Label({
            text: 'Iets werkt hier niet :(',
            pos: new Vector(20, 10),
            font: new Font({
                family: 'comic sans ms',
                size: 108,
            })
        })
        
        this.add(this.label)

        this.label2 = new Label({
            text: 'Press space to play again',
            pos: new Vector(20, 400),
            font: new Font({
                family: 'comic sans ms',
                size: 108, 
            })
        })
        
        this.add(this.label2)

        this.label3 = new Label({
            text: 'Your haai🦈-skoor is: 0, lol',
            pos: new Vector(20, 790),
            font: new Font({
                family: 'comic sans ms',
                size: 108, 
            })
        })
        
        this.add(this.label3)
    }


    onActivate(ctx) {
        this.label.text = 'Your skoor is: ' + this.engine.skoor
        if (this.engine.skoor > highSkoor){
            highSkoor = this.engine.skoor
            console.log(highSkoor)
            this.label3.text = 'Your haai🦈-skoor is: ' + highSkoor
        } 
    }

    onPreUpdate(engine) {
        if (engine.input.keyboard.isHeld(Keys.Space)) {
            this.engine.goToScene('level1')
          }
    }
}