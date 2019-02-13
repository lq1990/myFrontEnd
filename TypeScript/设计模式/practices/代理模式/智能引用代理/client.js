"use strict";
exports.__esModule = true;
var Proxy_1 = require("./Proxy");
/**
 * 智能引用代理：
 * 当一个对象被引用时，提供一些额外操作，比如将此对象调用的次数记录下来。
 */
Proxy_1.Proxy.numRefer = 0;
var p = new Proxy_1.Proxy();
p.refer();
p.refer();
var p2 = new Proxy_1.Proxy();
p2.refer();
p2.refer();
p2.refer();
