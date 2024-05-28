import { Actor, Vector, Engine, Keys, Scene} from "excalibur";
import { ResourceLoader ,Resources} from "./resources"
import { Block } from "./block";
import { Ending } from "./scenes/ending";

let speed = 0
export class Car extends Actor {
  constructor(){
    super({radius: Resources.Car.height/2})
  }
    onInitialize(engine){
        this.graphics.use(Resources.Car.toSprite())
        this.pos.x = engine.drawWidth / 4
        this.pos.y = engine.drawHeight / 2
        this.pos = new Vector(400, 400);
        this.vel = new Vector(0, 0);
        this.on('collisionstart', (event) => this.hitSomething(event))
    }

    hitSomething(event){
      if (event.other instanceof Block) {
          console.log('hit enemy')
          this.engine.goToScene('ending')
      }
  }

    onPreUpdate(engine) {
     
      if (speed > 0){
        speed = speed - (1.7 + 0.01*speed);
      }

        // UP = forward
        if (engine.input.keyboard.isHeld(Keys.W)) {
          speed += 10;
        }

        // DOWN = backward
        if (engine.input.keyboard.isHeld(Keys.S)) {
          speed -= 6;
        }
    
        // cursor keys is direction
        if (engine.input.keyboard.isHeld(Keys.D)) {
          this.rotation += speed * 0.00013;
        }
        if (engine.input.keyboard.isHeld(Keys.A)) {
          this.rotation -=  speed * 0.00013;
        }
          
        // direction is the cosine/sine of the angle!
        let direction = new Vector(
          Math.cos(this.rotation) * speed,
          Math.sin(this.rotation) * speed
        );
    
        this.vel = direction;
      }
}