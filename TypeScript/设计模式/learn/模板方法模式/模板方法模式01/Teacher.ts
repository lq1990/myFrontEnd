import { APerson } from './APerson';
export class Teacher extends APerson {
  protected dressUp(): void {
    console.log("穿工作服")
  }
  protected eatBreakfast(): void {
    console.log("做早饭，照顾孩子吃早饭")
  }
  protected takeThings(): void {
    console.log("带上昨晚准备的考卷")
  }
}
