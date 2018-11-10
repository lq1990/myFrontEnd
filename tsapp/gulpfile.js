var gulp = require("gulp");
var ts = require("gulp-typescript");
var tsproject = ts.createProject("tsconfig.json");

gulp.task("default",function () {
    return tsproject.src() // get src file
    .pipe(tsproject()) // put it into pipe
    .js // transform the file into js
    .pipe(gulp.dest('dist')); // put it into pipe, then into dist finally

})