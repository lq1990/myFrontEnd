import { Context } from "./Context";
import { State } from "./State";

let ctx = new Context();

let red = new State("red");
let green = new State("green");
let yellow = new State("yellow");

red.handle(ctx);
console.log(ctx.getState());
yellow.handle(ctx);
console.log(ctx.getState());

