import { IState } from './IState';
import { StateEnum } from './StateEnum';
import { Context } from './Context';

export abstract class AbstractState implements IState {
  private stateEnum: StateEnum;

  constructor(stateEnum: StateEnum) {
    this.stateEnum = stateEnum;
  }

  getStateEnum(): StateEnum {
      return this.stateEnum;
  }

  setStateEnum(stateEnum: StateEnum) 
  {
      this.stateEnum = stateEnum;
  }

  toString(): string {
      return this.stateEnum.toString();

  }

  abstract connect(ctx: Context): IState;
  abstract beginToLogin(ctx: Context): IState;
  abstract loginFailure(ctx: Context): IState;
  abstract loginSuccess(ctx: Context): IState;
  abstract logout(ctx: Context): IState;
}
