$(function () {

    /*
    $("#btn").on("click", function (e) {
        console.log("button");
    });

    // ==================  each ====================
    var arr = [11, 12, 13, 14];
    // forEach 方法， ie9+
    arr.forEach(function (val, idx, arr) {
        console.log("index: ", idx, ", val: ", val);
    });

    // jQ. 中 each
    $("li").each(function (index, elem) {
        console.log("index: ", index, ", elem: ", elem);
    });
    
    // =================== map, 有return值 =================
    // js ec5 中有map方法,必须有return值
    var arr = ["a","bc","de","fg"];
    var newArr = arr.map(function (value, index) {
        return value + index;
    });

    console.log(newArr);

    // jQ.
    var newArrJQ = $.map(["a","2","3","4"],function (value, index) {
        console.log(value + index);
        return value + index;
    });
    console.log(newArrJQ);

    // ===================== grep ===========================
    var n2 = $.grep([11,22,33,44],function (value,idx) {
        return value >20;
    });
    console.log(n2);

    // =================== inArray ===========================
    var idx_n = $.inArray(100,[20,10,22]);
    console.log(idx_n);

    // ================== merge ==============
    console.log($.merge([1,2,3],[44,3,66]));

    // ================ unique =============
    console.log($.unique([1,1,1,2,3,4]));
    
    // ================ jQ构造函数的extend方法 =============
    // 浅拷贝: 只复制子对象的地址，具体内容不进行复制
    var target = { name: "lq" };
    var obj1 = { age: 18, phone: "110", mail: "123@123.com" };
    var p1 = {k:123,m:"abc"};
    var obj2 = {run: function(){}, p:p1};

    var newObj = $.extend(target, obj1, obj2);
    console.log(newObj, target);
    console.log(newObj.p.k);
    p1.k = 444;
    console.log(newObj.p.k);
*/

    // 深拷贝
    var target = { name: "lq" };
    var obj1 = { age: 18, phone: "110", mail: "123@123.com" };
    var p1 = {k:123,m:"abc"};
    var obj2 = {run: function(){}, p:p1};

    var newObj = $.extend(true,target, obj1, obj2);
    console.log(newObj, target);
    console.log(newObj.p.k);
    p1.k = 444;
    console.log(newObj.p.k);




});