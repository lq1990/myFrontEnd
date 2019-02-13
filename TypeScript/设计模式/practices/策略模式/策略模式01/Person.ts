import { ITransport } from './ITransport';
export class Person {
    private type: ITransport;
    
    constructor(t: ITransport) {
        this.type = t;
    }

    takeAHoliday() {
        console.log("take a holiday...");
        this.type.travel();
    }
}