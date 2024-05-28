import { Scene, Camera, Actor, BoundingBox, Engine, Font, Label, Vector, Keys  } from "excalibur";
import { ResourceLoader ,Resources} from "../resources"
import { Level1 } from "./level1";


export class Intro extends Scene {
    onInitialize(engine) {
        //this.graphics.use(Resources.SuperRacersMenu.toSprite())
        //this.pos.x = engine.drawWidth / 4
        //this.pos.y = engine.drawHeight / 2  
    }
    onPreUpdate(engine) {
        if (engine.input.keyboard.isHeld(Keys.Space)) {
            this.engine.goToScene('level1')
          }
    }

    onActivate(ctx) {
        console.log("kachow")
        let label = new Label({
            text: 'Best game evur',
            pos: new Vector(10, 10),
            font: new Font({
                family: 'verdena',
                size: 108,
            })
        })
        
        this.add(label)

        let label2 = new Label({
            text: 'Press space to start',
            pos: new Vector(10, 500),
            font: new Font({
                family: 'verdena',
                size: 108,
            })
        })
        
        this.add(label2)
    }
    

}