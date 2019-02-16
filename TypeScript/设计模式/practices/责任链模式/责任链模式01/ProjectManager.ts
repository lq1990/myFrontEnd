import { AHandler } from './AHandler';

/**
 * 项目经理能处理 500元以下的申请。
 */
export class ProjectManager extends AHandler {
    handleRequest(user: string, fee: number):string {
        console.log("项目经理来处理");

        if(fee<=500){
            if(user=="anna"){
                return "项目经理同意"+user+"的"+fee+"元申请"
            } else {
                return "项目经理拒绝"+user+"的"+fee+"元申请"
            }
        } else {
            if(this.getSuccessor()!=null){
                return this.getSuccessor().handleRequest(user,fee);
            }
        }

    }
}