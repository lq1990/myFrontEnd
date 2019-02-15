import { ABuilder } from './ABuilder';
import { Product } from './Product';
export class Director {
    private builder: ABuilder;

    constructor(b: ABuilder) {
        this.builder = b;
    }

    setBuilder(b: ABuilder) {
        this.builder = b;
    }

    construct(): Product {
        this.builder.buildPartA();
        this.builder.buildPartB();
        this.builder.buildPartC();
        return this.builder.getResult();
    }
}