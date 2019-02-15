import { IVisitor } from './IVistitor';

export abstract class AStudent  {
    abstract accept(v: IVisitor):void;
}