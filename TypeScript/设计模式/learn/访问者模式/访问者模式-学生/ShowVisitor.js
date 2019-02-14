"use strict";
exports.__esModule = true;
var Bachelor_1 = require("./Bachelor");
/**
 * clog 访问的是何种学生。
 */
var ShowVisitor = /** @class */ (function () {
    function ShowVisitor() {
    }
    // 再实现
    ShowVisitor.prototype.visit = function (v) {
        if (v instanceof Bachelor_1.Bachelor) {
            console.log('visit A Bachelor Student');
        }
        else {
            console.log('visit A College Student');
        }
    };
    ShowVisitor.prototype.printMsg = function (s) {
        console.log('Name: ' +
            s.getName() +
            '\n' +
            'Uni: ' +
            s.getUni() +
            '\n' +
            'Rating: ' +
            s.getRating() +
            "\n");
    };
    return ShowVisitor;
}());
exports.ShowVisitor = ShowVisitor;
