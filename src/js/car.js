import { Actor, Vector, Engine, Keys} from "excalibur";
import { Resources} from "./resources"

let speed = 0
export class Car extends Actor {

    onInitialize(engine){
        this.graphics.use(Resources.Car.toSprite())
        this.pos.x = engine.drawWidth / 4
        this.pos.y = engine.drawHeight / 2
        this.pos = new Vector(400, 400);
        this.vel = new Vector(0, 0);
    }

    onPreUpdate(engine) {
     

      if (speed > 0){
        speed = speed - (1.5 + 0.01*speed);
      }

        // UP = forward
        if (engine.input.keyboard.isHeld(Keys.W)) {
          speed += 9.5;
        }

        // DOWN = backward
        if (engine.input.keyboard.isHeld(Keys.S)) {
          speed -= 6;
        }
    
        // cursor keys is direction
        if (engine.input.keyboard.isHeld(Keys.D)) {
          this.rotation += speed * 0.00008;
        }
        if (engine.input.keyboard.isHeld(Keys.A)) {
          this.rotation -=  speed * 0.00008;
        }
          
    
        // direction is the cosine/sine of the angle!
        let direction = new Vector(
          Math.cos(this.rotation) * speed,
          Math.sin(this.rotation) * speed
        );
    
        this.vel = direction;
      }
}