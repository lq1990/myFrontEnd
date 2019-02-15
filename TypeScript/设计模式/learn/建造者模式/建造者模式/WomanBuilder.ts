import { IPersonBuilder } from './IPersonBuilder';
import { Person } from './Person';
import { Woman } from './Woman';

export class WomanBuilder implements IPersonBuilder {
  person: Person;
  constructor() {
    this.person = new Woman();
  }

  buildHead() {
    console.log('建造女人的头');
  }
  buildBody() {
    console.log('建造女人的身体');
  }
  buildFoot() {
    console.log('建造女人的脚');
  }
  
  buildPerson(): import('./Person').Person {
    return this.person;
  }
}
