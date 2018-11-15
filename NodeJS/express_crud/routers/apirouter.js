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

module.exports = router;


