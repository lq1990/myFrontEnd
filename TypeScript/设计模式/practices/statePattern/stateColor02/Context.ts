import { State } from './State';

export class Context {
    private state: State;

    setState(val : State) {
        this.state = val;
    }

    getState() {
        return this.state;
    }
}