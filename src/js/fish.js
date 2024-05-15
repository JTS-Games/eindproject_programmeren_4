import { Actor, Vector, Engine, Keys} from "excalibur";
import { Resources} from "./resources"
import { Bullet } from './bullet.js';

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
            yspeed = -500
        }
        if (kb.isHeld(Keys.S) || kb.isHeld(Keys.Down)) {
            yspeed = 500
        }
        if (kb.isHeld(Keys.A) || kb.isHeld(Keys.Left)) {
            xspeed = -500
        }
        if (kb.isHeld(Keys.D) || kb.isHeld(Keys.Right)) {
            xspeed = 500
        }
        this.vel = new Vector(xspeed, yspeed)

        if (kb.wasPressed(Keys.Space)) {
            const bullet = new Bullet()
            bullet.shoot()
        }
    }
}