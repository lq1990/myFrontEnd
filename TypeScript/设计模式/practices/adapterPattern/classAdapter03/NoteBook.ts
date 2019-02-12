import { IPower5V } from './IPower5V';

export class NoteBook {
    turnOn(pow: IPower5V) {
        pow.getPower5V();
        console.log("有了5V电压，开始开机");
    }
}