import { Actor, Vector, Engine, Keys} from "excalibur";
import { Resources} from "./resources"

export class Fish extends Actor {
    onInitialize(engine){
        this.graphics.use(Resources.Fish.toSprite())
        this.graphics.flipHorizontal = true
        this.pos.x = engine.drawWidth / 2
        this.pos.y = engine.drawHeight / 2
    }

    onPreUpdate(engine){
        let xspeed = 0
        let yspeed = 0
        let kb = engine.input.keyboard

        if (kb.isHeld(Keys.W) || kb.isHeld(Keys.Up)) {
            yspeed = -300
        }
        if (kb.isHeld(Keys.S) || kb.isHeld(Keys.Down)) {
            yspeed = 300
        }
        if (kb.isHeld(Keys.A) || kb.isHeld(Keys.Left)) {
            xspeed = -300
            this.graphics.flipHorizontal = false
        }
        if (kb.isHeld(Keys.D) || kb.isHeld(Keys.Right)) {
            xspeed = 300
            this.graphics.flipHorizontal = true
        }
        this.vel = new Vector(xspeed, yspeed)
    }
}