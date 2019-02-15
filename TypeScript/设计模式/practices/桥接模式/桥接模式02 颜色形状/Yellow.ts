import { IColor } from './IColor';
export class Yellow implements IColor {
    bepaint(shape: string) {
        console.log("黄色的"+shape);
    }

}