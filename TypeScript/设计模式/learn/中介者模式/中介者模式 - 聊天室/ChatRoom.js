"use strict";
exports.__esModule = true;
var ChatRoom = /** @class */ (function () {
    function ChatRoom() {
    }
    ChatRoom.showMsg = function (user, msg) {
        console.log(new Date().toLocaleString() + ', name: ' + user.getName() + ', msg: ' + msg);
    };
    return ChatRoom;
}());
exports.ChatRoom = ChatRoom;
