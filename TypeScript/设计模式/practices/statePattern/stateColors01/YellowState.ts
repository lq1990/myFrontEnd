import { IState } from './IState';
import { BlueState } from './BlueState';
import { GreenState } from './GreenState';

export class YellowState implements IState {
    
  handleSX(c: import('./Context').Context) {
    console.log("yellow 2 blue");
    c.setState(new BlueState());
  }
  handleNX(c: import('./Context').Context) {
    console.log("yellow 2 green");
    c.setState(new GreenState());
  }
}
