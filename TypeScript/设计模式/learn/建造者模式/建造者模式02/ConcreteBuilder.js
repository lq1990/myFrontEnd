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
var ABuilder_1 = require("./ABuilder");
var ConcreteBuilder = /** @class */ (function (_super) {
    __extends(ConcreteBuilder, _super);
    function ConcreteBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ConcreteBuilder.prototype.buildPartA = function () {
        console.log('建造 A');
    };
    ConcreteBuilder.prototype.buildPartB = function () {
        console.log('建造 B');
    };
    return ConcreteBuilder;
}(ABuilder_1.ABuilder));
exports.ConcreteBuilder = ConcreteBuilder;
