import { IState } from './IState';
import { GreenState } from './GreenState';
import { BlueState } from './BlueState';

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
