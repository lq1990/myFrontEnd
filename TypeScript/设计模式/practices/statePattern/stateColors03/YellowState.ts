import { IState } from './IState';
import { BlueState } from './BlueState';
import { GreenState } from './GreenState';

export class YellowState implements IState {
  handleSX(c: import('./Context').Context) {
    console.log("yellow -> blue");
    c.setState(new BlueState());
  }
  handleNX(c: import('./Context').Context) {
    console.log("yellow -> green");
    c.setState(new GreenState());
  }
}
