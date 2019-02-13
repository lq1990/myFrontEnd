import { ITransport } from './ITransport';
export class Bike implements ITransport {
    travel(): void {
        console.log("travel by bike");
    }

}