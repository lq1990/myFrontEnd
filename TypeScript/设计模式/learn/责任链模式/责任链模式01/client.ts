import { AHandler } from './AHandler';
import { ConcreteHandler } from './ConcreteHandler';
/**
 * 责任链模式：
 * 
 */
let h1: AHandler = new ConcreteHandler();
let h2: AHandler = new ConcreteHandler();

h1.setSuccessor(h2);
h1.handleRequest()
