import { IPersonBuilder } from './IPersonBuilder';
import { Person } from './Person';
import { Man } from './Man';

export class ManBuilder implements IPersonBuilder {
  person: Person;
  constructor() {
    this.person = new Man();
  }

  buildHead() {
    console.log('建造男人的头');
  }
  buildBody() {
    console.log('建造男人的身体');
  }
  buildFoot() {
    console.log('建造男人的脚');
  }
  
  buildPerson(): import('./Person').Person {
    return this.person;
  }
}
