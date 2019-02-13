import { ITransport } from './ITransport';
export class Train implements ITransport {
    travel(): void {
        console.log("travel by train");
    }

}