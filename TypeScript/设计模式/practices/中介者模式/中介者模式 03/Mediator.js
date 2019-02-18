"use strict";
exports.__esModule = true;
var Mediator = /** @class */ (function () {
    function Mediator() {
    }
    Mediator.prototype.setHouseOwner = function (h) {
        this.houseowner = h;
    };
    Mediator.prototype.setTenant = function (t) {
        this.tenant = t;
    };
    Mediator.prototype.getPsMsg = function (msg, p) {
        if (p == this.houseowner) {
            this.tenant.getMsg(msg);
        }
        else {
            this.houseowner.getMsg(msg);
        }
    };
    return Mediator;
}());
exports.Mediator = Mediator;
