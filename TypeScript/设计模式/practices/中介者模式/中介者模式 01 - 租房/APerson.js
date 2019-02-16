"use strict";
exports.__esModule = true;
var APerson = /** @class */ (function () {
    function APerson(name, m) {
        this.name = name;
        this.mediator = m;
    }
    APerson.prototype.sendMsg = function (msg) {
        this.mediator.getPsMsg(msg, this); // 中介拿到this人的msg。
    };
    return APerson;
}());
exports.APerson = APerson;
