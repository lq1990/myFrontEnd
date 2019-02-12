import { IObserver } from './IObserver';
import { ISubject } from './ISubject';
export class Fan implements IObserver {
    // Fan是观察者，观察者要观察的主题要通过 构造器
    constructor(sub: ISubject){
        sub.addObserver(this);
    }
    update(temp: number) {
        if(temp>30) {
            console.log("我是风扇。太热了，我要开始吹风了！");
        } else {
            console.log("我是风扇。凉快，不用吹风咯！");
        }
    }

}