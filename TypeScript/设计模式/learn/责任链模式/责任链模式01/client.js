"use strict";
exports.__esModule = true;
var ConcreteHandler_1 = require("./ConcreteHandler");
/**
 * 责任链模式：
 *
 */
var h1 = new ConcreteHandler_1.ConcreteHandler();
var h2 = new ConcreteHandler_1.ConcreteHandler();
h1.setSuccessor(h2);
h1.handleRequest();
