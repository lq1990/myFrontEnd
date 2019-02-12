import { IObserver } from './IObserver';
import { ISubject } from './ISubject';
export class TempDisplay implements IObserver {
    constructor(sub: ISubject) {
        sub.addObserver(this);
    }
    update(temp: number) {
        console.log("我是显示器，温度改变了，我要刷新我的显示器了");
    }

}