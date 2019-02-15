"use strict";
exports.__esModule = true;
var Bachelor_1 = require("./Bachelor");
var ShowVisitor = /** @class */ (function () {
    function ShowVisitor() {
    }
    ShowVisitor.prototype.visit = function (s) {
        if (s instanceof Bachelor_1.Bachelor) {
            console.log("ShowVisitor visits a bachelor student...");
        }
        else {
            console.log("ShowVisitor visits a college student...");
        }
    };
    return ShowVisitor;
}());
exports.ShowVisitor = ShowVisitor;
