import { IColor } from './IColor';

export abstract class AShape {
    abstract draw(c: IColor); // 形状和颜色 聚合关系
}