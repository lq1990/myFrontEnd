import { ICriteria } from './ICriteria';
import { Person } from './Person';

/**
 * 或运算，并集
 */
export class OrCriteria implements ICriteria {
    private criteria: ICriteria;
    private otherCriteria: ICriteria;

    constructor(c: ICriteria, oth: ICriteria) {
        this.criteria = c;
        this.otherCriteria = oth;
    }
    
    meetCriteria(persons: Array<Person>): Array<Person> {
        let firstCriteriaItems: Array<Person> = this.criteria.meetCriteria(persons);
        let otherCriteriaItems: Array<Person> = this.otherCriteria.meetCriteria(persons);

        for(let p of otherCriteriaItems) {
            // 遍历 other中元素，如果不存在于first中，就添加到first中去。
            let temp = 0;
            firstCriteriaItems.forEach((item,idx)=>{
                if(p.getName() == item.getName()) {
                    // 此时说明：p存在于 first中
                    temp = 1;
                    return;
                }
            })

            if(temp==0) {
                // temp若没变，说明p不在first中。若不在，则push到first中。
                firstCriteriaItems.push(p);
            }
        }

        return firstCriteriaItems;
    }
}