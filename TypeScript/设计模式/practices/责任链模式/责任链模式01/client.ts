import { ProjectManager } from './ProjectManager';
import { DeptManager } from './DeptManager';
import { GeneralManager } from './GeneralManager';
/**
 * 责任链模式：
 * 
 */
let pm = new ProjectManager();
let dm = new DeptManager();
let gm = new GeneralManager();

pm.setSuccessor(dm);
dm.setSuccessor(gm);

let t1: string = pm.handleRequest("anna",200);
console.log("t1: "+t1);

let t2:string = pm.handleRequest("anna",900);
console.log("t2: "+t2);