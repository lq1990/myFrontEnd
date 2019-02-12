import { State } from './State';

/**
 * Context: state manager。
 * 每一个状态只关心 它的下一个可能的状态，从而无形中形成了状态转换的规则。
 */
export class Context {
    private state: State=null;

    setState(state: State) {
        this.state = state;
        console.log("当前状态：");
        console.log(this.state);
        console.log("\n");
    }

    push():Context {
        console.log("push...");
        this.state.handlepush(this);
        return this;
    }

    pull():Context {
        console.log("pull...");
        this.state.handlepull(this);
        return this;
    }


}