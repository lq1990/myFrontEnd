"use strict";
exports.__esModule = true;
var NoteBook = /** @class */ (function () {
    function NoteBook() {
    }
    NoteBook.prototype.turnOn = function (pow) {
        pow.getPower5V();
        console.log("有了5V电压，开始开机");
    };
    return NoteBook;
}());
exports.NoteBook = NoteBook;
