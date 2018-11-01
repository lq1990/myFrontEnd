$(function(){
    var $inputArr=$(".input-box input");
    console.dir($inputArr);
    
    $inputArr.focus(function(e){ // jQ. 隐式迭代了
        console.log(this.value);

    });

    // 简单绑定事件，接收两个参数的情况
    $inputArr.change("1234",function(e){
        console.dir(e); // jQ封装的事件对象
        console.log(e.data);
    });

    $inputArr[3].focus(); // 若不传参数，表示仅仅是模拟focus事件发生。仅仅是模拟，并不产生实际影响。


});