import { IState } from './IState';
import { YellowState } from './YellowState';
import { RedState } from './RedState';

export class GreenState implements IState {

  handleSX(c: import('./Context').Context) {
    console.log("green -> yellow");
    c.setState(new YellowState());
  }
  handleNX(c: import('./Context').Context) {
    console.log("green -> red");
    c.setState(new RedState());
  }
}
