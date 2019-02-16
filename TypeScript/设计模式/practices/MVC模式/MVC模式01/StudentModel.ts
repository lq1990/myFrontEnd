export class StudentModel {
    private name: string;
    private nr: string;

    getName(){
        return this.name;
    }
    setName(n: string){
        this.name = n;
    }

    getNr(){
        return this.nr;
    }
    setNr(n: string){
        this.nr = n;
    }

}