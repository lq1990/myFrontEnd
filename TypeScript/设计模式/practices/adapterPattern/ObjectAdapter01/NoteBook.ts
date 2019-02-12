import { IPower5V } from './IPower5V';
export class NoteBook {
    turnOn(powI: IPower5V) {
        powI.getPower5V();
        console.log("有了5V，开机");
    }
}