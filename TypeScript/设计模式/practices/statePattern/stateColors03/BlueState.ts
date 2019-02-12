import { IState } from './IState';
import { RedState } from './RedState';
import { YellowState } from './YellowState';

export class BlueState implements IState {
  handleSX(c: import('./Context').Context) {
    console.log("blue -> red");
    c.setState(new RedState());
  }
  handleNX(c: import('./Context').Context) {
    console.log("blue -> yellow");
    c.setState(new YellowState());
  }
}
