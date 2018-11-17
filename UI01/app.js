const Mock = require("mockjs");

var data = Mock.mock({
    
    "course|3":[
        {
            "id|+1":100,
            "name":"@name",
            "zip":"@natural(10000,50000)"
        }
    ],
    "course_category|2":[
        {
            "id|+1":10,
            "name":"@title"
        }
    ]
});


module.exports = function () {
    return data;
}
// console.log(data);