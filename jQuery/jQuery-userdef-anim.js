$(function () {
   $("#btnAnim").on("click",function () {
       $(".box").animate({
           // 数字型的可以动画。而颜色非数组不能动画
           height: 200,
           width: "300px",
           left: "+=30px", // 每次执行都增加30px的动画
           bottom: "-=30px",
           paddingLeft: "+=20px",
       },500,"swing");
   });


   // =================案例：回到页面顶部=====================
   $("#btnToTop").on("click",function () {
       console.log("top");

      $("html, body").animate({
          scrollTop: 0,
      },"","");
   });
});