import { AShape } from './AShape';
export class Square extends AShape {
    draw(c: import("./IColor").IColor) {
        // console.log("这是正方形");
        c.bepaint("正方形");
    }
}