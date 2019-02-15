import { AHandler } from './AHandler';
export class ProjectManager extends AHandler {
    handleFeeRequest(user: string, fee: number): string {
        let str: string = "";
        if(fee<500){
            if(user=="张三"){
                str = "成功：项目经理同意【"+user+"】的申请，聚餐费用金额是"+fee+"元";

            } else {
                str = "失败：项目经理拒绝申请"
            }

        } else {
            if(this.getSuccessor()!=null){
                return this.getSuccessor().handleFeeRequest(user,fee);
            }
        }
        return str;
    }

}