import { ISubject } from './ISubject';
import { IObserver } from './IObserver';

export class WeatherStation implements ISubject {
  private temp: number;
  private observers: IObserver[]= [];

  setTemp(val: number) {
    this.temp = val;
    console.log("我是气象站，温度变为："+this.temp);
    this.notifyObservers();
  }

  addObserver(o: IObserver) {
    this.observers.push(o);
  }
  removeObserver(o: IObserver) {
    let idx = this.observers.indexOf(o);
    this.observers.splice(idx,1);
  }
  notifyObservers() {
    for(let obs of this.observers) {
        obs.update(this.temp);
    }
  }
}
