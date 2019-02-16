import { User } from './User';

export class ChatRoom {
  static showMsg(user: User, msg: string) {
    console.log(
      new Date().toLocaleString() + ', name: ' + user.getName() + ', msg: ' + msg
    );
  }
}
