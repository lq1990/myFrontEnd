import { State } from './State';

export class Context {
    private state: State;
    
    constructor() {
        this.state = null;
    }

    setState(state){
        this.state = state;
    }
    getState() {
        return this.state;
    }
}