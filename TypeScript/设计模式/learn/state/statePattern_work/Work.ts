import { State } from './State';

export class Work {
    private current: State;
    private hour;

    constructor() {
        this.current = new ForenoonState();
    }

    Hour() {
        get: {
            return this.hour;
        }
    }

}