import { IColor } from './IColor';
export class Blue implements IColor {
    bepaint(shape: string) {
        console.log("用蓝色画"+shape);
    }
}