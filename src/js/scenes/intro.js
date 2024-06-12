import { Scene, Camera, Actor, BoundingBox, Engine, Font, Label, Vector, Keys  } from "excalibur";
import { ResourceLoader ,Resources} from "../resources"


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
            text: 'Greatest game evur!!1!',
            pos: new Vector(50, 50),
            font: new Font({
                family: 'comic sans ms',
                size: 108,
            })
        })
        
        this.add(label)

        let label2 = new Label({
            text: 'Press space to start',
            pos: new Vector(50, 700),
            font: new Font({
                family: 'comic sans ms',
                size: 108,
            })
        })
        
        this.add(label2)

        let label3 = new Label({
            text: 'Game bij🐝 Joey T Staneke',
            pos: new Vector(1080, 850),
            font: new Font({
                family: 'comic sans ms',
                size: 42,
            })
        })
        
        this.add(label3)
    }
    

}