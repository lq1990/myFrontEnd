import { ITransport } from './ITransport';
export class Plane implements ITransport {
    travel(): void {
        console.log("travel by plane");
    }

}