import { IColor } from './IColor';
export class Gray implements IColor {
    bepaint(shape: string) {
        console.log("灰色的"+shape);
    }
}