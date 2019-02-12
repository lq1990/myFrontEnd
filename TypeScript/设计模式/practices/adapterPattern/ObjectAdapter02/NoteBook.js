"use strict";
exports.__esModule = true;
var NoteBook = /** @class */ (function () {
    function NoteBook() {
    }
    NoteBook.prototype.turnOn = function (pow) {
        pow.getPower5V();
        console.log("notebook turns on...");
    };
    return NoteBook;
}());
exports.NoteBook = NoteBook;
