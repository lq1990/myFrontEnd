export abstract class AHandler {
    protected successor: AHandler=null;

    getSuccessor(): AHandler {
        return this.successor;
    }
    setSuccessor(s: AHandler){
        console.log("设置下个人：");
        console.log(s);
        this.successor = s;
    }

    /**
     * 处理user的fee申请
     * @param user 
     * @param fee 
     */
    abstract handleRequest(user: string, fee: number);
}