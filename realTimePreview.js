/**
 * Created by Alexandra on 11/9/2015.
 */
var gulp=require('gulp');
var sass=require('gulp-sass');
var less=require('gulp-less');
var connect=require('gulp-connect');

//实时预览
gulp.task('server',function(){
    connect.server({
        root:'dist',//设置文件根目录
        port:8080,//设置端口
        livereload:true //动态加载，实时刷新
    });
});

gulp.task('sass',function(){
    return gulp.src('./app/styles/main.scss').pipe(sass()).pipe(gulp.dest('dist/css'));
});

gulp.task('less',function() {
    return gulp.src('./app/styles/page.less').pipe(less()).pipe(gulp.dest('dist/css'))
});

gulp.task('copyHtml',function(){
    return gulp.src('./app/*.html').pipe(gulp.dest('dist')).pipe(connect.reload());
});
//监控 index.html的改变 在dist中实时更新这些改变
gulp.task('watch',function(){
    gulp.watch('./app/index.html',['copyHtml']);
});


gulp.task('default',['server','watch']);

//gulp.task('default',['copyHtml','copyImage','copyScripts'],function(){
//    console.log('done');
//});

