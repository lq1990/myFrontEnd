$(function () {
   $("p").on("click",function (e) {
    //    console.log(e);
       console.log(e.which);
   });

   $("input").on("keydown",function (e) {
       console.log(e.which); // 通过which可以获得key的编码
   });


//    =============== 自定义事件 ===============0
//    绑定一个自定义事件
   $("input:text").on("myevent",function (e,a,b,c) {
      console.log("我的自定义事件");
      console.log(this.value);
   });

//    触发自定义事件
   $("input:text").trigger("myevent",[1,2,3]);

});