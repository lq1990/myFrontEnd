import { IColor } from './IColor';
export class White implements IColor {
    bepaint(shape: string) {
        console.log("用白色画"+shape);
    }
}