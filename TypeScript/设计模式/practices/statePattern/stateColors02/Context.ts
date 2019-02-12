import { IState } from './IState';
export class Context {
    private state: IState;

    setState(state:IState) {
        this.state = state;
    }

    sx():Context {
        this.state.handleSX(this);
        return this;
    }
    nx():Context {
        this.state.handleNX(this);
        return this;
    }
}