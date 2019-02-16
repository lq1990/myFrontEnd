export abstract class AHandler {
    protected successor: AHandler;

    setSuccessor(s: AHandler){
        this.successor = s;
    }
    getSuccessor(){
        return this.successor;
    }

    abstract handleRequest(user:string, fee:number):string;
}