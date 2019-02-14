import { IVisitor } from './IVisitor';
export abstract class AStudent {
    private name: string;
    private uni: string;

    abstract accept(v: IVisitor);
}