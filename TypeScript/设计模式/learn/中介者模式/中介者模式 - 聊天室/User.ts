import { ChatRoom } from './ChatRoom';
export class User {
    private name: string;

    getName(){
        return this.name;
    }
    setName(n:string){
        this.name = n;
    }

    constructor(name:string){
        this.name = name;
    }

    sendMsg(msg: string){
        ChatRoom.showMsg(this, msg);
    }
}