"use strict";
exports.__esModule = true;
var PowerAdapter = /** @class */ (function () {
    function PowerAdapter(pow) {
        this.pow220 = pow;
    }
    PowerAdapter.prototype.getPower5V = function () {
        this.pow220.getPower220V();
        this.transform();
        console.log('get 5V...');
    };
    PowerAdapter.prototype.transform = function () {
        console.log('transform 220V to 5V');
    };
    return PowerAdapter;
}());
exports.PowerAdapter = PowerAdapter;
