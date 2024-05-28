import { Actor, Vector, Engine, Keys, Scene} from "excalibur";
import { ResourceLoader ,Resources} from "./resources"

let blockspeed = 50;

export class Block extends Actor {
    onInitialize(engine){

    }

    onPreUpdate(engine) {
        for (let i = 0; i < 1000; i++) {
            this.spawnBlock(i)
        }
    }

    spawnBlock(i){
        const block = new Actor()
        block.graphics.use(Resources.Fish.toSprite())
        block.pos = new Vector(1599+i*200, Math.random()*900)
        block.vel = new Vector(-blockspeed, 0)
        blockspeed += 1
    }
}