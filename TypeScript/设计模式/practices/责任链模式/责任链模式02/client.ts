import { ProjectManager } from "./ProjectManager";
import { DeptManager } from "./DeptManager";
import { GeneralManager } from './GeneralManager';

/**
 * 责任链模式：
 * 很多对象由每一个对象对其下家的引用而连接起来形成一条链。
 */
let pm = new ProjectManager();
let dm = new DeptManager();
let gm = new GeneralManager();

pm.setSuccessor(dm);
dm.setSuccessor(gm);

console.log(pm.handleRequest("anna",300));
console.log(pm.handleRequest("beta",300));
console.log("-------------------");
console.log(pm.handleRequest("anna",900));
console.log(pm.handleRequest("beta",900));
console.log("-------------------");
console.log(pm.handleRequest("anna",9000));
console.log(pm.handleRequest("beta",9000));