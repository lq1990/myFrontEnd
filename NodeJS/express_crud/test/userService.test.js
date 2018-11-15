// 单元测试 BDD
const userService = require("../service/userService.js");
const assert = require("assert"); // 断言库
const should = require("should");

// 流程：
// 1. 定义一个场景，场景初始化数据。
// 2. 调用测试代码
// 3. 检查
// 4. 清理测试现场数据

// =====================================================
// 定义一个测试场景，第一个参：场景描述，第二个餐：测试场景的回调
describe("userService Test", function () {
    // 初始化场景的数据 BDD。before：所有的测试用例执行之前先执行的代码。功能：初始化
    before(function () {
        console.log("=====================");
        console.log("before...");
        console.log("=====================");
        
        require("../initData.js")
    });
    
    // 所有的测试用例执行完成后，执行。功能：数据打扫
    after(function () {
        console.log("=====================");
        console.log("after...");
        console.log("=====================");
    })

    // 定义测试用例: 测试getUsers
    it("#getUsers", function () {
        // 这个方法执行后，返回一个数组
        var arr = userService.getUsers();
        
        // 断言，若不是true，则断言失败，即测试失败
        assert.equal(Array.isArray(arr),true);
        assert.equal(arr.length>=10,true);
    });
    //#region node原生的assert模块
    // it("#getPageUsers", function () {
    //     console.log("unit test for getPageUsers, not yet finished.")

    //     const data = userService.getPageUsers(2,10);
    //     // {users: [], code:1, msg: "获取分页数据成功"}
    //     // 正常参数的测试
    //     assert.equal(data.users.length, 10);
    //     assert.equal(Array.isArray(data.users), true);


    //     // 测试异常数据
    //     const edata = userService.getPageUsers("*2",10);
    //     // assert.equal(edata.users.length, 10);
    //     // assert.equal(Array.isArray(edata.users), true);
    //     assert.equal(edata.code,1,"若传入非法的参数，返回code为0");
    //     assert.equal(edata,{ // 此处出现问题。assert比较的是地址。改进：用shouldjs
    //         code: 0,
    //         msg: "type or size of page is invalid."
    //     },"传入错误类型的参数，应该返回对象")
    // })
    //#endregion

    // ============== should 断言=================
    it("#getPageUsers with shouldjs", function () {
        const data = userService.getPageUsers("222",3);
        console.log("data: ",data);

        // Object 可以如下用
        data.should.be.an.Object();
        data.code.should.be.a.Number();
        data.code.should.eqls(0);
        data.code.should.aboveOrEqual(0);
        data.should.eqls({
            code: 0,
            msg: "type or size of page is invalid."
        });

        // 特殊情况
        var t = Object.create(null);
        // t.should.be.a.Number(); // 这样用不行。
        should(t).be.a.Object(); // 应该这样用。

        userService.getPageUsers(2,"abc").should.eql({
            code: 0,
            msg: "type or size of size is invalid."
        });

        const edata = userService.getPageUsers(2,5);
        edata.should.be.a.Object();
        edata.code.should.eql(1);
        edata.users.length.should.eql(5);
        edata.should.containEql({
            code:1,
            msg:"success"
        })

    });

    it("#delUser",function () {
        // 正常删除数据
        const t = userService.delUser(20004);
        t.should.eqls({
            code:1,
            msg:"del successfully"
        });

        userService.delUser(0).should.eqls({
            code: 0,
            msg: "del failed"
        });

        // 删除异常数据
        userService.delUser("abc").should.eqls({
            code: 0,
            msg: "del failed"
        });

    });

    it("#getUserById",function () {
        should(userService.getUserById(-8)).be.Null();
        should(userService.getUserById("1a")).be.Null();
        should(userService.getUserById("20000")).be.Null();
        should(userService.getUserById(20000)).containEql({
            id:20000
        });

    })

})

