import { AHandler } from './AHandler';

export class DeptManager extends AHandler {
    handleFeeRequest(user: string, fee: number): string {
        let str: string = "";
        if(fee<1000){
            if(user=="张三"){
                str = "成功：部门经理同意【" +user+ "】的申请，聚餐费用金额是"+fee+"元";

            } else {
                str = "失败：部门经理拒绝申请"
            }

        } else {
            if(this.getSuccessor()!=null){
                return this.getSuccessor().handleFeeRequest(user,fee);
            }
        }
        return str;
    }
}