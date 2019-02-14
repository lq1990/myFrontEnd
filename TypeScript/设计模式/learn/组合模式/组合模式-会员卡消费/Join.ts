import { AMarket } from './AMarket';
export class Join extends AMarket {
  name: string;

  constructor(s:string){
      super();
      this.name = s;
  }
  
  protected add(m: AMarket): void {
    throw new Error('Method not implemented.');
  }
  protected remove(m: AMarket): void {
    throw new Error('Method not implemented.');
  }
  payByCard(): void {
    console.log(this.name+" 消费，积分累积了")
  }
}
