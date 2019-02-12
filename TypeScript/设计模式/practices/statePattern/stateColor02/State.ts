import { Context } from './Context';
export class State {
    private color;

    constructor(color) {
        this.color = color;
    }

    handle(ctx: Context) {
        console.log(`turn to ${this.color}`);
        ctx.setState(this);
    }
}