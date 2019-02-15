"use strict";
exports.__esModule = true;
var Product_1 = require("./Product");
var ABuilder = /** @class */ (function () {
    function ABuilder() {
        this.product = new Product_1.Product();
    }
    ABuilder.prototype.getResult = function () {
        return this.product;
    };
    return ABuilder;
}());
exports.ABuilder = ABuilder;
