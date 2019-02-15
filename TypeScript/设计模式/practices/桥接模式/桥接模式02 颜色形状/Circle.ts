import { AShape } from './AShape';
export class Circle extends AShape {
    draw(c: import("./IColor").IColor) {
        c.bepaint("圆形");
    }
}