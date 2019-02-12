"use strict";
exports.__esModule = true;
var Context_1 = require("./Context");
var State_1 = require("./State");
var ctx = new Context_1.Context();
var red = new State_1.State("red");
red.handle(ctx);
console.log(ctx.getState());
