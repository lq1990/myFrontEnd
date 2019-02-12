export class StateEnum {
    private UNCONNECTED = 0;
    private CONNECTED = 1;
    private LOGINING = 2;
    private LOGIN_INTO_SYSTEM = 3;

    private key: number;
    private stateStr: string;

    constructor(key: number, stateStr: string) {
        this.key = key;
        this.stateStr = stateStr;
    }

    printState() {
        console.log("current state: "+this.key+" ,"+this.stateStr);
    }


}