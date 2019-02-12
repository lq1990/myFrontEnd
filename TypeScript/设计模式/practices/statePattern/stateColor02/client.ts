import { Context } from "./Context";
import { State } from "./State";

let ctx = new Context();

let red = new State("red");
red.handle(ctx);
console.log(ctx.getState());