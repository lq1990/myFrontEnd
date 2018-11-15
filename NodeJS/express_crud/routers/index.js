const express = require("express");

// 创建一个router对象
const router = express.Router({

});

// router对象相当于app对象。路由负责地址分配
// /stu/list
router.get("/list",(req,res)=>{
    // 自动找到views文件夹中的
    res.render("stus/index.art")
});

module.exports = router;


