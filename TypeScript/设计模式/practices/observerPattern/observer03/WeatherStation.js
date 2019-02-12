"use strict";
exports.__esModule = true;
var WeatherStation = /** @class */ (function () {
    function WeatherStation() {
        this.observers = [];
    }
    WeatherStation.prototype.setTemp = function (val) {
        this.temp = val;
        console.log("气象站设置温度：" + this.temp);
        this.notifyObservers();
    };
    WeatherStation.prototype.addObserver = function (o) {
        this.observers.push(o);
    };
    WeatherStation.prototype.removeObserver = function (o) {
        var idx = this.observers.indexOf(o);
        this.observers.splice(idx, 1);
    };
    WeatherStation.prototype.notifyObservers = function () {
        for (var _i = 0, _a = this.observers; _i < _a.length; _i++) {
            var obs = _a[_i];
            obs.update(this.temp);
        }
    };
    return WeatherStation;
}());
exports.WeatherStation = WeatherStation;
