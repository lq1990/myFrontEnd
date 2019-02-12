import { ISubject } from './ISubject';
import { IObserver } from './IObserver';

export class WeatherStation implements ISubject {
  private observers: IObserver[] = [];
  private temp: number;

  setTemp(val) {
    this.temp = val;
    console.log("我是气象站，温度是："+this.temp);
    this.notifyObservers();
  }

  addObserver(o: import('./IObserver').IObserver) {
    this.observers.push(o);
  }
  removeObserver(o: import('./IObserver').IObserver) {
    let idx = this.observers.indexOf(o);
    this.observers.splice(idx, 1);
  }
  notifyObservers() {
    for (let obs of this.observers) {
      obs.update(this.temp);
    }
  }
}
