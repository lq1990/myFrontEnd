import { IPower5V } from './IPower5V';

export class NoteBook {
    turnOn(pow: IPower5V) {
        pow.getPower5V();
        console.log("notebook: turnning on...");
    }
}