export class Student {
    private rollNo:string;
    private name: string;

    getRollNo(){
        return this.rollNo;
    }
    setRollNo(r: string){
        this.rollNo = r;
    }

    getName(){
        return this.name;
    }
    setName(n: string){
        this.name = n;
    }
}