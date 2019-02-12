import { Context } from './Context';

export class State {
    private color;
    
    constructor(color){
        this.color = color;
    }

    // 处理改状态下的具体逻辑
    handle(context: Context) {
        console.log(`turn to ${this.color}`);
        context.setState(this);
    }
}