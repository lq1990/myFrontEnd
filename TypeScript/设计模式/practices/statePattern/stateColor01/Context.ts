import { State } from './State';

/**
 * Context是场景类，维护状态间的约束关系和控制触发状态的切换。
 */
export class Context {
    private state: State;

    setState(val: State) {
        this.state = val;
    }

    getState() {
        return this.state;
    }
}