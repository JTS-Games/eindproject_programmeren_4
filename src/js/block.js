import { Actor, Vector, Engine, Keys, Scene} from "excalibur";
import { ResourceLoader ,Resources} from "./resources"



export class Block extends Actor {
    blockspeed = 500;
    i = 0
    constructor(i){
        super({ width: Resources.Block.width-20, height: Resources.Block.height-20 }) 
        this.i = i
    }
    onInitialize(engine){
        this.graphics.use(Resources.Block.toSprite())
        this.pos = new Vector(1599+this.i*200, Math.random()*900)

    }
    onActivate(ctx) {

    }   
    onPreUpdate(engine) {
        if (engine.input.keyboard.isHeld(Keys.Space)) {
            this.blockspeed = 500
            this.pos = new Vector(1599+this.i*200, Math.random()*900)
            this.vel = new Vector(-this.blockspeed, 0)
          }
        this.blockspeed += 0.1
        this.vel = new Vector(-this.blockspeed, 0)
        console.log(this.blockspeed)
    }

}