export abstract class Car {
  desctiption: string;
  getDes(): string {
    return this.desctiption;
  }
  abstract cost(): number;
}
