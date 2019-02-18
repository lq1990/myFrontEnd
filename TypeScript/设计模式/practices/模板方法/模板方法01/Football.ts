import { ASport } from './ASport';
export class Football extends ASport {
  protected init(): void {
    console.log("足球运动，初始化");
  }
  protected start(): void {
    console.log("足球开始");
  }
  protected end(): void {
    console.log("足球结束")
  }
}
