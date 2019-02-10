"use strict";
exports.__esModule = true;
var TeslaX_1 = require("./TeslaX");
var EnhancedPilot_1 = require("./EnhancedPilot");
var teslax = new TeslaX_1.TeslaX();
var en_x = new EnhancedPilot_1.EnhancedPilot(teslax);
console.log(en_x.getDes());
console.log(en_x.cost());
