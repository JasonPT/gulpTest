/**
 * Created by Alexandra on 11/9/2015.
 */
var gulp=require('gulp');
var sass=require('gulp-sass');
var less=require('gulp-less');
var connect=require('gulp-connect');
var concat=require('gulp-concat');
var uglify=require('gulp-uglify');
var rename=require('gulp-rename');
var minifycss=require('gulp-minify-css');
var imagemin=require('gulp-imagemin');
//实时预览
gulp.task('server',function(){
    connect.server({
        root:'dist',//设置文件根目录
        port:8080,//设置端口
        livereload:true //动态加载，实时刷新
    });
});

//css 压缩
gulp.task('sass',function(){
    return gulp.src('./app/styles/main.scss')
        .pipe(sass())
        .pipe(minifycss())
        .pipe(rename('main.min.css'))
        .pipe(gulp.dest('dist/css'));
});

gulp.task('less',function() {
    return gulp.src('./app/styles/page.less')
        .pipe(less())
        .pipe(minifycss())
        .pipe(rename('page.min.css'))
        .pipe(gulp.dest('dist/css'))
});

gulp.task('copyHtml',function(){
    return gulp.src('./app/*.html').pipe(gulp.dest('dist')).pipe(connect.reload());
});
//监控 index.html的改变 在dist中实时更新这些改变
gulp.task('watch',function(){
    gulp.watch('./app/index.html',['copyHtml']);
});

gulp.task('default',['server','watch']);

//js合并文件
gulp.task('compress',function(){
    return gulp.src(['./app/scripts/*.js',
        './app/scripts/page.js']).pipe(concat('join.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist/scripts'));
});


//image 压缩
gulp.task('copyImage',function(){
    //** 匹配任何字符 包括路径分隔符/   *号不能匹配路径分隔符/
    return gulp.src('./app/images/**/*.{jpg,png}')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/images'));
});