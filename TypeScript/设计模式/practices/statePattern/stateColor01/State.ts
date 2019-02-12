import { Context } from "./Context";

/**
 * State是状态类，包含状态值和状态改变时具体的处理方法。
 */
export class State {
    private color;
    constructor(color) {
        this.color = color;
    }

    // 处理该状态下的具体逻辑
    handle(ctx: Context) {
        console.log(`turn to ${this.color}`);
        ctx.setState(this);
    }
}