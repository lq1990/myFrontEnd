import { AGame } from './AGame';

export class Football extends AGame {
  protected init(): void {
    console.log("足球运动准备")
  }
  protected start(): void {
    console.log("足球运动开始")
  }
  protected end(): void {
    console.log("足球运动结束")
  }
}
