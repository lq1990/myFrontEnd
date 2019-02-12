/**
 * 总结：
 * 主题 与 观察者。
 * 主题有 温度 和 观察者 两个属性，当主题设置温度时，会通知所有的观察者，
 * 主题有增删方法，可以增加或删除观察者。
 * 观察者有update方法，不同观察者update略不同。
 * 
 * 此案例：
 * 观察者1：display，当温度被设置时，会更新自己的显示
 * 观察者2：fan，风扇会根据温度高低而被打开或关闭。
 */

interface ISubject {
    registerObserver(o: IObserver);
    removeObserver(o: IObserver);
    notifyObservers();
}

interface IObserver {
    update(temperature: number);
}

class WeatherStation implements ISubject {
    private temperature: number;
    private observers: IObserver[] = [];

    setTemperature(temp: number) {
        console.log("WeatherStation: new temperature measured: "+temp);
        this.temperature = temp;

        // 当温度改变时，通知观测者
        this.notifyObservers();
    }

    registerObserver(o: IObserver) {
        this.observers.push(o);
    }
    removeObserver(o: IObserver) {
        let idx = this.observers.indexOf(o);
        this.observers.splice(idx,1);
    }
    notifyObservers() {
        for(let obs of this.observers) {
            obs.update(this.temperature);
        }
    }
}

/**
 * 每个 观察者 在被构造的同时，会把自己注册即添加到 主题上。
 */
class TemperatureDisplay implements IObserver {
    private subject: ISubject;

    constructor(weatherS: ISubject) {
        this.subject = weatherS;
        weatherS.registerObserver(this);
    }
    
    update(temperature: number) {
        console.log("TemperatureDisplay: I need to update my display.");
    }
}

class Fan implements IObserver {
    private subject: ISubject;

    constructor(weatherS: ISubject) {
        this.subject = weatherS;
        weatherS.registerObserver(this);
    }
    
    update(temperature: number) {
        if(temperature > 25) {
            console.log("Fan: it's so hot here, turning myself on.");
        } else {
            console.log("Fan: it's noce and cool here, turning myself off.");
        }
    }
}

let ws = new WeatherStation();

let tempDisplay = new TemperatureDisplay(ws);
let fan = new Fan(ws);

ws.setTemperature(20);
ws.setTemperature(30);