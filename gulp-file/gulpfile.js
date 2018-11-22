// 以下code会执行在node环境下
const gulp = require("gulp");
const sass = require("gulp-sass");
const concat = require("gulp-concat");
const autoprefixer = require("gulp-autoprefixer");
const cleanCss = require("gulp-clean-css");

// 创建一个gulp任务，任务名是default。
// 在终端运行时 gulp default, 即gulp 加 任务名。default的情况下，可以直接terminal中输入gulp。
gulp.task("html", function () {
    // 第一个参：任务名
    // 第二个参：可选，依赖的任务名，数组类型，里面为str
    // 第三个参：回调函数，接受参数，任务执行完之后可调用
    // 回调函数：返回值是 stream、promise、调用cb
    console.log("gulp html 压缩 task");
});
gulp.task("html2", function () {
    console.log("gulp html 压缩2 task");
});

/**
 * 要求：
 * 1. scss 文件进行编译 css文件
 * 2. css文件 和 scss编译后的代码合并到 main.css 文件中去
 * 3. css 自动添加前缀 (css3)
 * 4. css进行压缩
 * 5. 如果是开发阶段，需要增加sourcemap
 * 6. 给最后的main.css 文件添加 版本号
 */
gulp.task("style", function () {
    return gulp.src(["./src/styles/**/*.{css,scss}", "!./src/styles/main.css"])
        .pipe(sass().on("error", sass.logError)) // 此处为中间的编译，对scss编译为css
        .pipe(autoprefixer({ // 自动添加前缀
            browsers: ["last 2 versions"], // 浏览器版本
            cascade: true, // 美化性：默认为true，大括号的位置
            add: true, // 是否添加前缀，默认true
            remove: true, // 删除过时前缀，默认true
            flexbox: true // 为flexbox属性添加前缀，默认true
        }))
        .pipe(concat("main.css")) // css文件合并
        .pipe(cleanCss({
            // 压缩css
            compatibility: "ie8",

            // 保留所有特殊前缀，当用autoprefixer 生成的浏览器前缀。若不加这个参数
            // 有可能会删除部分前缀
            keepSpecialComments: "*"
        }))
        .pipe(gulp.dest("./src/styles"));

});

// ========== 把 assets 文件夹下 的所有文件 拷贝到 dist文件夹内 =============0
gulp.task("copyAssets", function () {
    // gulp.src() 可创建一个流
    // 把assets内所有文件
    return gulp
        .src("./src/assets/**/*.*", { read: true })
        .pipe(gulp.dest("./dist/assets/"));

});


// 可在task中传 依赖项[]。意思：必须先执行 []中的依赖项，之后再执行default
gulp.task("default", ["html", "html2"], () => {
    console.log("gulp default task");
});
