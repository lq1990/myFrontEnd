import { ARead } from './ARead';
export class File extends ARead {
    private name:string;
    constructor(name:string) {
        super();
        this.name = name;
    }
    
  protected add(c: ARead): void {
    throw new Error('Method not implemented.');
  }
  protected remove(c: ARead): void {
    throw new Error('Method not implemented.');
  }
  read() {
    console.log(this.name+"读文件");
  }
}
