import { Car } from './Car';

export abstract class CarOption extends Car {
  description: string;
  abstract getDes(): string;
  abstract cost(): number;
}
