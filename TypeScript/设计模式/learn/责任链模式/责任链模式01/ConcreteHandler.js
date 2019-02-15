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
var AHandler_1 = require("./AHandler");
var ConcreteHandler = /** @class */ (function (_super) {
    __extends(ConcreteHandler, _super);
    function ConcreteHandler() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ConcreteHandler.prototype.handleRequest = function () {
        if (this.getSuccessor() != null) {
            console.log("放过请求");
            this.getSuccessor().handleRequest();
        }
        else {
            console.log("处理请求");
        }
    };
    return ConcreteHandler;
}(AHandler_1.AHandler));
exports.ConcreteHandler = ConcreteHandler;
