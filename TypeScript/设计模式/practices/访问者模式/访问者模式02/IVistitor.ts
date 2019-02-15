import { Bachelor } from "./Bachelor";
import { College } from './College';


/**
 * 违反了 依赖倒置原则。
 * 
 * 但必须限定 被访问的对象。
 */
export interface IVisitor {
    visit(ba: Bachelor);
    visit(co: College)
}