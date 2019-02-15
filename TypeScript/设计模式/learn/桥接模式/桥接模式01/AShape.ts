import { IColor } from './IColor';
export abstract class AShape {
    color: IColor;

    setColor(c: IColor){
        this.color=c;
    }
    abstract draw();
}