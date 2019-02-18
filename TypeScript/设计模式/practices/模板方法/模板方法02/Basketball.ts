import { AGame } from './AGame';

export class Basketball extends AGame {
  protected init(): void {
    console.log("篮球运动准备")
  }
  protected start(): void {
    console.log("篮球运动开始")
  }
  protected end(): void {
    console.log("篮球运动结束")
  }
}
