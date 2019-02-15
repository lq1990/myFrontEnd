import { AShape } from './AShape';
export class Square extends AShape {
    draw(c: import("./IColor").IColor) {
        c.bepaint("正方形");
    }
}