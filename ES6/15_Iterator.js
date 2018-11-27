// DIY写一个遍历器
let s = {
    data: [1, 3, 9, "abc"],
    [Symbol.iterator]() {
        let self = this;
        return {
            next() {
                // {value: any, done: boolean}
                // 每次遍历，都要返回一个上面对象
                if (self._index === undefined) {
                    self._index = 0;
                }

                let t = {
                    value: self.data[self._index],
                    done: self._index === self.data.length - 1
                }
                self._index++;
                return t;
            }
        }
    }
}

for (let v of s) {
    console.log('v:', v);
}

// 具备原生 Iterator。Array,Map,Set,String,TypedArray,函数的arguments对象，NodeList对象
console.log(Array.prototype[Symbol.iterator]);

let arr = [1,3,9];
for (let val of arr){ // for of直接拿到value
    console.log('val:', val);
}

// 伪数组部署遍历器
let s ={
    0:1,
    1:"aicoder",
    2:{},
    length:3,
    [Symbol.iterator]: Array.prototype[Symbol.iterator] // 指向数组的这个方法
}

for( let val of s) {
    console.log('val:', val);
}