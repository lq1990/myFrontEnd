"use strict";
exports.__esModule = true;
var PersonDirector = /** @class */ (function () {
    function PersonDirector() {
    }
    PersonDirector.prototype.constructPerson = function (pb) {
        pb.buildHead();
        pb.buildBody();
        pb.buildFoot();
        return pb.buildPerson();
    };
    return PersonDirector;
}());
exports.PersonDirector = PersonDirector;
