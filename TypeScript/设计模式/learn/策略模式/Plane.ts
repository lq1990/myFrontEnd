import { ITravel } from './ITravel';
export class Plane implements ITravel {
    travel(): void {
        console.log("飞机出行，花费1000元");
    }

}