import { PersonDirector } from './PersonDirector';
import { ManBuilder } from './ManBuilder';
import { WomanBuilder } from './WomanBuilder';
/**
 * 建造者模式：
 * 将一个复杂的对象的构建和它的表示分离，
 * 使得同样的构建过程可以创建不同的表示
 */
let pd: PersonDirector = new PersonDirector();
let woman = pd.constructPerson(new WomanBuilder());
let man = pd.constructPerson(new ManBuilder());