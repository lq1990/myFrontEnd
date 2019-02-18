import { ASport } from './ASport';
export class Basketball extends ASport {
  protected init(): void {
    console.log("篮球运动，初始化");
  }
  protected start(): void {
    console.log("篮球开始");
  }
  protected end(): void {
    console.log("篮球结束")
  }
}
