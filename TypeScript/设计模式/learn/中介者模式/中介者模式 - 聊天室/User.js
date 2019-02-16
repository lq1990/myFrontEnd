"use strict";
exports.__esModule = true;
var ChatRoom_1 = require("./ChatRoom");
var User = /** @class */ (function () {
    function User(name) {
        this.name = name;
    }
    User.prototype.getName = function () {
        return this.name;
    };
    User.prototype.setName = function (n) {
        this.name = n;
    };
    User.prototype.sendMsg = function (msg) {
        ChatRoom_1.ChatRoom.showMsg(this, msg);
    };
    return User;
}());
exports.User = User;
