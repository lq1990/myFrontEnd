import { ISubject } from './ISubject';
import { IObserver } from './IObserver';
export class WeatherStation implements ISubject {
  private observers: IObserver[] = [];
  private temp: number;

  setTemp(val: number) {
      this.temp = val;
      console.log("气象站设置温度："+this.temp);
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
