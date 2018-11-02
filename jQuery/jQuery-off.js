$(function () {
   $(".list li").on("click",function () {
       console.log(this.innerHTML);
   });

//    给click添加 命名空间demo
   $(".list li").on("click.demo",function () {
    console.log("==",this.innerHTML);
    });

    $(".list li").on("click.demo",function () {
        console.log("===",this.innerHTML);
    });


    // =================解绑==================
   $("#btn").on("click",function () {
       $(".list li").off("click");
   });

//    解绑命名空间事件
    $("#btnOfNameSpace").on("click",function () {
       $(".list li").off("click.demo"); 
    });



});