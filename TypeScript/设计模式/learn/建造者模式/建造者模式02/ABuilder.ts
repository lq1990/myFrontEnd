import { Product } from './Product';

export abstract class ABuilder {
    protected product: Product = new Product();

    abstract buildPartA(): void;
    abstract buildPartB(): void;
    abstract buildPartC(): void;

    getResult(): Product {
        return this.product;
    }
}