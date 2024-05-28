import { Actor, Vector, Engine, Keys, Scene} from "excalibur";
import { ResourceLoader ,Resources} from "./resources"



export class Block extends Actor {
    blockspeed = 500;
    i = 0
    constructor(i){
        super({ width: Resources.Fish.width-50, height: Resources.Fish.height-50 }) 
        this.i = i
        console.log(this);
    }
    onInitialize(engine){
        this.graphics.use(Resources.Fish.toSprite())
        this.pos = new Vector(1599+this.i*200, Math.random()*900)
        this.vel = new Vector(-this.blockspeed, 0)
        this.blockspeed += 1
    }

    onPreUpdate(engine) {

    }


}