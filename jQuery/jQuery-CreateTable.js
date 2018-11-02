$(function () {
   var data= [
       {
           name: "hanse",
           email:"123@126.com",
           age:88
       },
       {
           name:"bob",
           email:"bob@qq.com",
           age:91
       },
       {
           name:"cello",
           email:"ce@11.com",
           age:1
       }
   ];

   var tempStrArr = [];
   tempStrArr.push( $("tbody").html() );  //  标签内部文本的 读
   console.log(typeof $("tbody").html());

   for(var i=0;i<data.length;i++){
       tempStr = "";
       tempStr += "<tr>";
       tempStr +=       "<td>"+data[i].name+"</td>";
       tempStr +=       "<td>"+data[i].email+"</td>";
       tempStr +=       "<td>"+data[i].age+"</td>";
       tempStr += "</tr>";
       tempStrArr.push(tempStr);
   };

   $("tbody").html( tempStrArr.join("") ); // 写入



});