import { ITravel } from './ITravel';
export class Train implements ITravel {
    travel(): void {
        console.log("火车出行，花费500元");
    }

}