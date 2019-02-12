import { FacA } from './FacA';
import { FacB } from './FacB';
/**
 * 抽象工厂模式。
 * 抽象工厂提供多个具体工厂角色，分别对应于多个具体产品角色，
 * 每一个具体工厂角色 只负责某一个产品角色的实例化，
 * 每一个具体工厂类 只负责创建产品的某一个具体子类的实例。
 */

 let fa = new FacA();
 fa.createEngine();
 fa.createAircondition();

 let fb = new FacB();
 fb.createEngine();
 fb.createAircondition();