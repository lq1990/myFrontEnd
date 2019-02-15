import { AShape } from './AShape';
import { IColor } from './IColor';

export class Circle extends AShape{

    draw() {
        this.color.bepaint("圆形");
    }
}