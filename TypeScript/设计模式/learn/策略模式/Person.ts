import { ITravel } from './ITravel';

export class Person {
    private type: ITravel;

    constructor(t: ITravel) {
        this.type = t;
    }

    takeHoliday(){
        console.log("去度假");
        this.type.travel();
    }
}