"use strict";
exports.__esModule = true;
var NoteBook = /** @class */ (function () {
    function NoteBook() {
    }
    NoteBook.prototype.turnOn = function (pow) {
        pow.getPower5V();
        console.log("got 5V, turning on...");
    };
    return NoteBook;
}());
exports.NoteBook = NoteBook;
