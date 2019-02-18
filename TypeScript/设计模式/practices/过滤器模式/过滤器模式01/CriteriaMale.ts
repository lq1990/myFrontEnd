import { ICriteria } from './ICriteria';
import { Person } from './Person';

export class CriteriaMale implements ICriteria {
    private list: Person[];

    meetCriteria(persons: import("./Person").Person[]): import("./Person").Person[] {
        this.list = []; // 初始化为空。其实这种方式，不如不设置 private list对象，而是直接在 这个大括号里用let 定义。
        for(let p of persons) {
            if(p.getGender()=="male"){
                this.list.push(p);
            }
        }
        return this.list;
    }
}
