import { Bachelor } from "./Bachelor";
import { College } from './College';

/**
 * 限定：只能访问 bachelor, college。
 * 被访问的对象要清晰。
 */
export interface IVisitor {
    visit(bachelor: Bachelor);
    visit(college: College);
}