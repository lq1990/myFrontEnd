import { IState } from './IState';
import { YellowState } from './YellowState';
import { RedState } from './RedState';

export class GreenState implements IState {
    
  handleSX(c: import('./Context').Context) {
    console.log("green 2 yellow");
    c.setState(new YellowState());
  }
  handleNX(c: import('./Context').Context) {
    console.log("green 2 red");
    c.setState(new RedState());
  }
}
