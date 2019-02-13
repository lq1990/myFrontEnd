import { ITravel } from './ITravel';

export class Bike implements ITravel {
    travel(): void {
        console.log("骑自行车玩，免费");
    }

}