"use strict";
exports.__esModule = true;
var Ctrl = /** @class */ (function () {
    function Ctrl(m, v) {
        this.model = m;
        this.view = v;
    }
    Ctrl.prototype.getStuName = function () {
        return this.model.getName();
    };
    Ctrl.prototype.setStuName = function (n) {
        this.model.setName(n);
    };
    Ctrl.prototype.getStuNr = function () {
        return this.model.getNr();
    };
    Ctrl.prototype.setStuNr = function (n) {
        this.model.setNr(n);
    };
    Ctrl.prototype.updateView = function () {
        this.view.printStuInfo(this.model.getName(), this.model.getNr());
    };
    return Ctrl;
}());
exports.Ctrl = Ctrl;
