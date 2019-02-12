import { IObserver } from './IObserver';
import { ISubject } from './ISubject';

export class Fan implements IObserver {
    constructor(sub: ISubject) {
        sub.addObserver(this);
    }
    update(temp: number) {
        if(temp>30) {
            console.log("我是风扇，一个观察者，天气太热，我要吹风了！");
        } else {
            console.log("我是风扇，一个观察者，天气很好，不用工作！");
        }
    }
}