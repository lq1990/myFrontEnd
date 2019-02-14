import { classB } from './classB';
export class classA {
    method1(){
        console.log("我是A");
    }
    method2(b: classB){
        b.showA(this);
    }
}