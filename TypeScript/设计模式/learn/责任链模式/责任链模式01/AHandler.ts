export abstract class AHandler {
    /**
     * 持有后继的责任对象
     */
    protected successor: AHandler;

    /**
     * 示意处理请求的方法，可以传参
     */
    abstract handleRequest(): void;

    /**
     * 取值方法
     */
    getSuccessor(): AHandler {
        return this.successor;
    }

    setSuccessor(s: AHandler): void{
        this.successor  = s;
    }
}