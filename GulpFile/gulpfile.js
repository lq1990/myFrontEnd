// 以下code会执行在node环境下
const gulp = require('gulp'); // gulp：自动化构建工具
const sass = require('gulp-sass'); // scss -> css
const concat = require('gulp-concat'); // 合并css、scss
const autoprefixer = require('gulp-autoprefixer'); // 自动加前缀用
const cleanCss = require('gulp-clean-css'); // 压缩用
const sourcemap = require('gulp-sourcemaps'); // dev阶段用
const rev = require('gulp-rev'); // 打版本号

const imagemin = require('gulp-imagemin'); // 压缩img

const babel = require('gulp-babel'); // es6代码兼容性
const eslint = require('gulp-eslint'); // 代码格式化
const uglify = require('gulp-uglify'); // js压缩
const revCollector = require('gulp-rev-collector'); // 把json文件提到的js、css文件替换
const htmlmin = require('gulp-htmlmin'); // 压缩html

const runSequence = require('run-sequence'); // 序列化执行，自动
const clean = require('gulp-clean'); // 清理dist中 老旧的css、js
const open = require('gulp-open'); // 代开uri或file
const connect = require('gulp-connect'); // 本地 web服务器daili
const modRewrite = require('connect-modrewrite'); // 服务器的代理插件
const configRevReplace = require('gulp-requirejs-rev-replace'); // 解决requirejs引用路径版本替换的问题
const tmodjs = require('gulp-tmod'); // 把模板生成js文件

// 创建一个gulp任务，任务名是default。
// 在终端运行时 gulp default, 即gulp 加 任务名。default的情况下，可以直接terminal中输入gulp。
gulp.task('html1', function() {
  // 第一个参：任务名
  // 第二个参：可选，依赖的任务名，数组类型，里面为str
  // 第三个参：回调函数，接受参数，任务执行完之后可调用
  // 回调函数：返回值是 stream、promise、调用cb
  console.log('gulp html 压缩 task');
});
gulp.task('html2', function() {
  console.log('gulp html 压缩2 task');
});

// =============================css, scss ======================================
/**
 * 要求：
 * 1. scss 文件进行编译 css文件
 * 2. css文件 和 scss编译后的代码合并到 main.css 文件中去
 * 3. css 自动添加前缀 (css3)
 * 4. css进行压缩
 * 5. 如果是开发阶段，需要增加 sourcemap
 * 6. 给最后的main.css 文件添加 版本号
 */
// 最终生产产品用的，不用sourcemap，但用 打版本
gulp.task('style', function() {
  return gulp.src(['./src/styles/**/*.{css,scss}', '!./src/styles/main.css'])
    .pipe(sass().on('error', sass.logError)) // 此处为中间的编译，对scss编译为css
    .pipe(autoprefixer({ // 自动添加前缀
      browsers: ['last 2 versions'], // 浏览器版本
      cascade: true, // 美化性：默认为true，大括号的位置
      add: true, // 是否添加前缀，默认true
      remove: true, // 删除过时前缀，默认true
      flexbox: true // 为flexbox属性添加前缀，默认true
    }))
    .pipe(concat('main.css')) // css文件合并
    .pipe(cleanCss({
      // 压缩css
      compatibility: 'ie8',

      // 保留所有特殊前缀，当用autoprefixer 生成的浏览器前缀。若不加这个参数
      // 有可能会删除部分前缀
      keepSpecialComments: '*'
    }))
    .pipe(rev())
    .pipe(gulp.dest('./dist/styles'))
    .pipe(rev.manifest())
    .pipe(gulp.dest('src/styles'));
});

// dev阶段使用，用到sourcemap
gulp.task('style:dev', function() {
  return gulp
    .src(['./src/styles/**/*.{css,scss}', '!./src/styles/main.css'])
    .pipe(sourcemap.init()) // sourcemap使用前，先init
    .pipe(sass().on('error', sass.logError)) // 此处为中间的编译，对scss编译为css
    .pipe(autoprefixer({ // 自动添加前缀
      browsers: ['last 2 versions'], // 浏览器版本
      cascade: true, // 美化性：默认为true，大括号的位置
      add: true, // 是否添加前缀，默认true
      remove: true, // 删除过时前缀，默认true
      flexbox: true // 为flexbox属性添加前缀，默认true
    }))
    .pipe(concat('main.css')) // css文件合并
    .pipe(sourcemap.write())
    .pipe(gulp.dest('./src/styles'));
});
// ========== 把 assets 文件夹下 的所有文件 拷贝到 dist文件夹内 =============0
gulp.task('copyAssets', function() {
  // gulp.src() 可创建一个流
  // 把assets内所有文件
  return gulp
    .src(['./src/assets/**/*.*', './src/lib/**', './src/*.ico'], {
      read: true, base: './src' })
    .pipe(gulp.dest('./dist/'));
});

// 可在task中传 依赖项[]。意思：必须先执行 []中的依赖项，之后再执行default
gulp.task('default', ['html1', 'html2'], () => {
  console.log('gulp default task');
});

// ============================= img压缩  ==============================
gulp.task('imagemin', function() {
  return gulp
    .src('src/assets/**/*.{jpg,jpeg,png,gif,bmp,ico}') // **意思：子孙辈所有文件夹
    .pipe(imagemin({
      optimizationLevel: 5, // 默认3，取值范围：0-7
      progressive: true, // 默认false，无损压缩jpg图片
      interlaced: true, // 默认false，隔行扫描gif进行渲染
      multipass: true // 默认false，多次优化svg直至完全优化
    }))
    .pipe(gulp.dest('dist/assets/')); // 把src中图片压缩之后，放到dist中
});

// ============================= js处理 ==================================
gulp.task('js', function() {
  // 1. es6代码转换，使代码兼容到老版本。可用 .babelrc 文件放设置
  // 2. eslint 对js代码进行格式化校验，比如缩进。可用 .editorconfig, .eslintrc.js, .eslintignore 文件放设置
  // 3. js压缩。用 gulp-uglify
  // 4. js 打版本号（生产用，dist）
  return gulp.src(['src/js/**/*.js'])
    .pipe(eslint()) // 对格式化，进行校验
    .pipe(eslint.format()) // 错误消息进行格式化输出
    .pipe(eslint.failAfterError()) // 若校验失败，结束当前的任务。不往下执行。
    .pipe(babel()) // babel: 进行代码转换,es6
    .pipe(uglify()) // 压缩
    .pipe(rev()) // 打版本号
    .pipe(gulp.dest('dist/js/'))
    .pipe(rev.manifest()) // 生成json文件
    .pipe(gulp.dest('src/js/'));
});

// ====================== 解决requirejs引用路径版本替换的问题=====================
gulp.task('revjs', function() {
  return gulp.src(['dist/js/**/*.js'])
    .pipe(configRevReplace({
      manifest: gulp.src('src/js/rev-manifest.json')
    }))
    .pipe(gulp.dest('dist/js/'));
});

// ================ html压缩、版本替换 =======================
gulp.task('html', function() {
  // 1. 把src中html中引入的css、js文件 替换成 已经有版本号的css、js
  // 2. html进行压缩
  return gulp
    .src(['./src/**/*.json', './src/**/*.html']) // 引入的json文件，为了替换用
    .pipe(revCollector({ replaceReved: true })) // 关键。把json文件提到的js、css文件替换
    .pipe(htmlmin({ // html 压缩
      removeComments: true, // 清除html注释
      collapseWhitespace: true, // 压缩html
      removeEmptyAttributes: true, // 删除所有空格作属性值
      removeScriptTypeAttributes: true, // 删除scirpt中 type = "text/javascript"
      removeStyleLinkTypeAttributes: true, // 删除 style和link中 type="text/css"
      minifyJS: true, // 压缩页面 js
      minifyCSS: true // 压缩页面 css
    }))
    .pipe(gulp.dest('./dist/'));
});

// =======================clean。打包之前的清理工作============================
gulp.task('clean', function() {
  return gulp
    .src(['dist/js/**', 'dist/styles/**'], { read: false })
    .pipe(clean({ force: true })); // 强制清理
});

// ==========================把模板生成js文件（相当于把模板进行预编译，提升了效率）===============================
gulp.task('tpl', function() {
  return gulp.src('src/template/**/*.html')
    .pipe(tmodjs({
      templateBase: 'src/template/',
      runtime: 'tpl.js',
      compress: false
    }))
    .pipe(gulp.dest('src/js/template/'));
});

// ========================最终的打包。序列化执行，自动======================================
gulp.task('dist', function() {
  runSequence('clean', 'copyAssets', 'imagemin', 'style', 'js', 'html', 'revjs');
});

// ========================= gulp开发监控 ==================================
// gulp实现开发监控。自动监控某个目录下文件，发生变化后即执行某个task
gulp.task('dev', ['open'], function(params) {
  // 监控scss或css变化，并*自动*调用style样式，生成工作量
  // gulp.watch 传两个参，第一个：监控的目录下的文件，第二个：当被监控的目录中中间发生变化后 执行的task
  // 注意：路径的开头直接写 src，不加 ./
  gulp.watch(['src/styles/css/**', 'src/styles/scss/**'], ['style:dev'], function() {
    connect.reload(); // 监控时，回调函数，重启web服务器
  });
});

// =========================启动web服务器代理======================================
gulp.task('devServer', function() {
  connect.server({
    root: ['./src'], // 网站根目录
    port: 38900, // 端口
    livereload: true,
    middleware: function(connect, opt) {
      return [modRewrite([ // 设置代理，自动跳转。遇到/api/ 时，自动跳转到后面的http...
        '^/api/(.*)$ http://192.168.0.102:8080/mockjsdata/1/api/$1 [P]'
      ])];
    }
  });
});

// 启动浏览器打开地址
gulp.task('open', ['devServer'], function() {
  gulp
    .src(__filename)
    .pipe(open({ uri: 'http://localhost:38900/index.html' }));
});
