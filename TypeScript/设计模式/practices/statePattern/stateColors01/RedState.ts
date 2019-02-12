import { IState } from './IState';
import { GreenState } from './GreenState';
import { BlueState } from './BlueState';

export class RedState implements IState {
  handleSX(c: import('./Context').Context) {
    console.log('red 2 green');
    c.setState(new GreenState());
  }
  handleNX(c: import('./Context').Context) {
    console.log('red 2 blue');
    c.setState(new BlueState());
  }
}

// 每个状态只关心 它的下一个可能的状态，
// 从而无形中形成了状态转移
