import { IObserver } from './IObserver';
import { ISubject } from './ISubject';
export class TempDisplay implements IObserver {
    constructor(sub: ISubject) {
        sub.addObserver(this);
    }
    update(temp: number) {
        console.log("我是温度显示器。我要更新显示了！");
    }
}