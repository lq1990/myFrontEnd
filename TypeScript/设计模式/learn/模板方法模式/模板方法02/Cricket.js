"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var AGame_1 = require("./AGame");
var Cricket = /** @class */ (function (_super) {
    __extends(Cricket, _super);
    function Cricket() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Cricket.prototype.init = function () {
        console.log("cricket game initialized! start playing...");
    };
    Cricket.prototype.startPlay = function () {
        console.log("cricket game started. Enjoy");
    };
    Cricket.prototype.endPlay = function () {
        console.log("cricket game finished");
    };
    return Cricket;
}(AGame_1.AGame));
exports.Cricket = Cricket;
