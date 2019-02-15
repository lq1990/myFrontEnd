import { ABuilder } from './ABuilder';
export class ConcreteBuilder extends ABuilder {
  buildPartA(): void {
    console.log('建造 A');
  }
  buildPartB(): void {
    console.log('建造 B');
  }
  buildPartC(): void {
    console.log('建造 C');
  }
}
