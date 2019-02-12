"use strict";
exports.__esModule = true;
var NoteBook = /** @class */ (function () {
    function NoteBook() {
    }
    NoteBook.prototype.turnOn = function (pow) {
        pow.getPower5V();
        console.log("turnning on...");
    };
    return NoteBook;
}());
exports.NoteBook = NoteBook;
