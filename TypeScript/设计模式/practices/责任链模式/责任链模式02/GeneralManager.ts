import { AHandler } from './AHandler';

export class GeneralManager extends AHandler {
    handleRequest(user,fee): string {
        let str:string="";
        
        if(fee>1000){
            if(user=="anna"){
                str = "同意" + user+"的申请，申请费用是"+fee+"元";
            } else {
                str = "拒绝" + user+"的申请，申请费用是"+fee+"元";
                
            }
        } 
        return str;
    }

}