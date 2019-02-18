import { APerson } from './APerson';
export class Student extends APerson {
    
  protected dressUp(): void {
    console.log("穿校服");
  }
  protected eatBreakfast(): void {
    console.log("吃妈妈做好的早餐")
  }
  protected takeThings(): void {
    console.log("背书包，带上家庭作业和红领巾")
  }
}
