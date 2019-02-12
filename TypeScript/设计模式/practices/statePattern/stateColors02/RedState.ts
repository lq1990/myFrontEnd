import { IState } from './IState';
import { GreenState } from './GreenState';
import { BlueState } from './BlueState';

export class RedState implements IState {

  handleSX(c: import('./Context').Context) {
    console.log("red -> green");
    c.setState(new GreenState());
  }
  handleNX(c: import('./Context').Context) {
    console.log("red -> blue");
    c.setState(new BlueState());
  }
}
