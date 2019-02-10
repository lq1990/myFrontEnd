/*
function createArray(length:number, value: any): Array<any> {
    let res = [];
    for(let i=0;i<length; i++) {
        res[i] = value;
    }

    return res;
}

// console.log(createArray(3,"x"));
*/

// ===================== 使用泛型 ==========================
function createArray<T>(length:number, value: T): Array<T> {
    let res: T[] = [];
    for(let i=0;i<length; i++) {
        res[i] = value;
    }

    return res;
}
// console.log(createArray<string>(3,"abc"));
// console.log(createArray(3,12)); // 也可以不手动指定，而让类型推论

// ============================ 泛型约束 ==============================
// 使用接口去约束 泛型
interface Lengthwise {
    length: number;
}

function loggingIdentity<T extends Lengthwise>(arg:T): T {
    console.log(arg.length);
    return arg;
}

loggingIdentity("acc");
