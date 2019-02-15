import { AShape } from './AShape';

export class Circle extends AShape {
    draw(c: import("./IColor").IColor) {
        // console.log("这是圆形");
        c.bepaint("圆形")
    }
}