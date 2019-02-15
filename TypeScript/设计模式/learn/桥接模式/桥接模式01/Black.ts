import { IColor } from './IColor';
export class Black implements IColor {
    bepaint(shape: string) {
        console.log("黑色的"+shape);
    }
}