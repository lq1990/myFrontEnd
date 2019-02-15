import { IColor } from './IColor';
export class White implements IColor {
    bepaint(shape: string) {
        console.log("白色"+shape);
    }
}