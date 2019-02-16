import { AHandler } from './AHandler';

export class GeneralManager extends AHandler {
    handleRequest(user: string, fee: number):string {
        console.log("总经理来处理");

        if(fee>1000){
            if(user=="anna"){
                return "总经理你同意"+user+"的"+fee+"元申请"
            } else {
                return "总经理拒绝"+user+"的"+fee+"元申请"
            }
        } 
    }
}