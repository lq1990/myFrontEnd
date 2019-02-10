let isDone: boolean = false;
let isDoneNow: boolean = true;
let isDoneString: boolean = true;

let decLiteral: number = 10;
let hexLiteral: number = 0xff00f; // 16进制
let binLiteral: number = 0b10101; // 2进制
let octalLiteral: number = 0o656251643; // 八进制

// let b: boolean = new Boolean(1); // 错误
let notN: number = NaN;
let inf: number = Infinity;

let myName: string = "lq";
let myAge: number = 29;

// 模板字符串
let sent: string = `hi, my name is ${myName}.
I'll be ${myAge+1} years old next year!`;

// console.log(sent);

// function alertName() : void {
    // alert("name is abc");
// }

interface Person {
    name:string;
    age: number;
}

let tom: Person = {
    name: "Tom",
    age: 12
};

let f: number[] = [1,3,4];
let f2: Array<number> = [1,4,6];

interface NumArr {
    [index: number]:number;
}
let f3: NumArr = [11,22,33];

// console.log(f);
// console.log(f2);
// console.log(f3);

function buildName(first:string, last?:string) {
    if(last){
        return first + last;
    } else {
        return first;
    }
}

let tom2 = buildName("Tom");

console.log(tom2);