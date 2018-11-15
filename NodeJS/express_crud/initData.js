/*
// 初始化默认的测试用户数据
const fs = require("fs");
const path = require("path");

const jsondb = require("./db.json");

// 初始化users属性
jsondb.users || (jsondb.users = []);

for( var i=0;i<33;i++){
    jsondb.users.push({
        id:10010+i,
        name:"aicoder"+i,
        phone:"11223"+i,
        email:"abc@abc.com"
    });
}

// 把数据写入到db.json
fs.writeFileSync(path.join(__dirname,"db.json"), 
                JSON.stringify(jsondb), // 转换成json字符串格式
                {encoding:"utf8"});

console.log("---successfully");
*/

// ==================== practise once more ================================
const fs = require("fs");
const path = require("path");
const Mock = require("mockjs")

const jsondb = require("./db.json");

jsondb.users || (jsondb.users = []); // 短路表达式

//#region 自己写的模拟数据
// for (var i = 0; i < 3; i++) {
//     jsondb.users.push({
//         "id": 20010+i,
//         "name": "aicoder"+i,
//         "phone": "112230"+i,
//         "email": "abc@abc.com"
//     })
//     console.log("-----------");
//     console.log(JSON.stringify(jsondb));
// };
//#endregion

// 使用mock 生成数据
let data = Mock.mock({
    "users|133":
    [
        {
            "id|+1":20000,
            "name":"@name",
            "email":"@email",
            "phone":"@natural(13200000,13300000)",
            "address":"@county(true)",
            "zip":"@zip",
            "birthday":"@date('yyyy-MM-dd')"
        }
    ]
});

// es6中的展开运算符 ... 三个点。可以展开运算符、对象、数组。
// jsondb.users.push(...data.users);
jsondb.users = data.users;

// 把数据写入到db.json
fs.writeFileSync(path.join(__dirname,"db.json"),
    JSON.stringify(jsondb) , // 转换成json格式，勿忘
    { 
    encoding:"utf8"
});

console.log("successfully");










