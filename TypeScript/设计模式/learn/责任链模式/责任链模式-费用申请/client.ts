import { AHandler } from './AHandler';
import { GeneralManager } from './GeneralManager';
import { DeptManager } from './DeptManager';
import { ProjectManager } from './ProjectManager';
/**
 * 责任链模式：
 * 聚会费用申请
 */
let h1: AHandler = new GeneralManager();
let h2: AHandler = new DeptManager();
let h3: AHandler = new ProjectManager();
// 设置 下个处理任务的人
h3.setSuccessor(h2);
h2.setSuccessor(h1);

// test。都是先由 h3来处理
let t1: string = h3.handleFeeRequest("张三",300);
console.log("test1: "+t1);
let t2: string = h3.handleFeeRequest("李四",300);
console.log("test2: "+t2);
console.log("----------------------------------------");

let t3: string = h3.handleFeeRequest("张三",700);
console.log("test1: "+t3);
let t4: string = h3.handleFeeRequest("李四",700);
console.log("test2: "+t4);
console.log("----------------------------------------");

let t5: string = h3.handleFeeRequest("张三",3000);
console.log("test1: "+t5);
let t6: string = h3.handleFeeRequest("李四",3000);
console.log("test2: "+t6);
