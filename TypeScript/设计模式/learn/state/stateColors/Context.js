"use strict";
exports.__esModule = true;
/**
 * Context: state manager。
 * 每一个状态只关心 它的下一个可能的状态，从而无形中形成了状态转换的规则。
 */
var Context = /** @class */ (function () {
    function Context() {
        this.state = null;
    }
    Context.prototype.setState = function (state) {
        this.state = state;
        console.log("当前状态：");
        console.log(this.state);
        console.log("\n");
    };
    Context.prototype.push = function () {
        console.log("push...");
        this.state.handlepush(this);
        return this;
    };
    Context.prototype.pull = function () {
        console.log("pull...");
        this.state.handlepull(this);
        return this;
    };
    return Context;
}());
exports.Context = Context;
