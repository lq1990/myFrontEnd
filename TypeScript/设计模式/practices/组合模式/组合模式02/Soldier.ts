import { ACount } from './ACount';

export class Soldier extends ACount {
  private name: string;
  constructor(name: string) {
    super();
    this.name = name;
  }
  protected add(c: ACount): void {
    throw new Error('Method not implemented.');
  }
  protected remove(c: ACount): void {
    throw new Error('Method not implemented.');
  }
  count(): void {
    console.log(this.name + ' 小兵报数');
  }
}
