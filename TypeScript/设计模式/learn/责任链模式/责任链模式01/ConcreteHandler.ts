import { AHandler } from './AHandler';
export class ConcreteHandler extends AHandler {
    /**
     * 规则：只有有下家就传给下家，若没有下家，就自行处理。
     */
    handleRequest(): void {
        if(this.getSuccessor() != null){
            console.log("放过请求");
            this.getSuccessor().handleRequest();
        } else {
            console.log("处理请求");
        }
    }
}