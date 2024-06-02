import { Actor, Vector, Engine, Keys, Scene} from "excalibur";
import { ResourceLoader ,Resources} from "./resources"
import { Car } from "./car";



export class Coin extends Actor {
    blockspeed = 500;
    i = 0
    constructor(i){
        super({ width: Resources.Coin.width, height: Resources.Coin.height }) 
        this.i = i
    }
    onInitialize(engine){
        this.graphics.use(Resources.Coin.toSprite())
        this.pos = new Vector(1599+this.i*200, Math.random()*900)
        this.vel = new Vector(-this.blockspeed, 0)
        this.blockspeed += 1
        this.on('collisionstart', (event) => this.hitSomething(event))
    }
    hitSomething(event){
        if (event.other instanceof Car) {
          console.log('munt!')
          this.kill()
        }
    }

    onPreUpdate(engine) {
        if (engine.input.keyboard.isHeld(Keys.Space)) {
            this.blockspeed = 500
            this.pos = new Vector(1599+this.i*200, Math.random()*900)
            this.vel = new Vector(-this.blockspeed, 0)
          }
      this.rotation = this.rotation + 0.1
      this.blockspeed += 0.1
      this.vel = new Vector(-this.blockspeed, 0)
    }
}