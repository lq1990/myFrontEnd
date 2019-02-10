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
function createArray(length, value) {
    var res = [];
    for (var i = 0; i < length; i++) {
        res[i] = value;
    }
    return res;
}
function loggingIdentity(arg) {
    console.log(arg.length);
    return arg;
}
