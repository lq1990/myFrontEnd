const express = require("express");
const userService = require("../service/userService");

// 创建一个router对象。router相当于app。
const router = express.Router({

});

// router对象相当于app对象。路由负责地址分配
// /api/userlist
router.get("/userlist", (req, res) => {
    // 自动找到views文件夹中的
    res.json(userService.getUsers());
});

// GET /api/pageuser
router.get("/pageuser", (req, res) => {
    // 要去用户传来数据，page、size
    // 返回数据：{page: 3, size: 10, count: 100, data: {...}}
    var pageIdx = parseInt(req.query.page);
    pageIdx = (isNaN(pageIdx) || pageIdx <= 0) ? 1 : pageIdx;

    var pageSize = parseInt(req.query.size);
    pageSize = (isNaN(pageSize) || pageSize <= 0) ? 10 : pageSize;

    var data = userService.getPageUsers(pageIdx, pageSize);
    res.json({
        page: pageIdx,
        size: pageSize,
        data: data.users,
        count: data.count
    });

});

router.post("/deluser/:id", function (req, res) {
    const id = parseInt(req.params.id); // 以路由的方式获取id
    if (isNaN(id)) {
        res.json({
            msg: "del failed",
            code: 0
        })
        return;
    }

    res.json(userService.delUser(id));
});

router.post("/useradd", function (req, res) {
    // res.json({"msg":"ok"});
    // 对于表单而言，拿到post的data用req.body
    // console.log(req.body);
    res.json(userService.addUser(req.body));

});

router.post("/userupdate", function (req, res) {
    var user =Object.assign({}, req.body, {id:parseInt(req.body.id)});
    res.json(userService.editUser(user));
});


module.exports = router;


