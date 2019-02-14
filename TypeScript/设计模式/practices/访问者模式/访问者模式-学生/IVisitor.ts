import { Bachelor } from './Bachelor';
import { College } from './College';

/**
 * 这里体现了 缺点：
 * visit传入的 不是抽象，而是具体。
 * 违反了 依赖倒置原则。
 * 
 * 但必须传入具体的 学生类。学生类必须是已知的。限制访问权限。
 */
export interface IVisitor {
    visit(ba: Bachelor);
    visit(co: College)
}