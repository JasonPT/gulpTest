/**
 * Created by Alexandra on 11/9/2015.
 */
var gulp=require('gulp');


gulp.task('copyHtml',function(){
    return gulp.src('./app/index.html').pipe(gulp.dest('dist'));
});

gulp.task('copyImage',function(){
    //** 匹配任何字符 包括路径分隔符/   *号不能匹配路径分隔符/
    return gulp.src('./app/images/**/*.{jpg,png}').pipe(gulp.dest('dist/images'));
});