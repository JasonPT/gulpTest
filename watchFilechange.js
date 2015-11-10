/**
 * Created by Alexandra on 11/9/2015.
 */
var gulp=require('gulp');

gulp.task('copyHtml',function(){
    return gulp.src('./app/index.html').pipe(gulp.dest('dist'));
});
//监控 index.html的改变 在dist中实时更新这些改变
gulp.task('watch',function(){
    gulp.watch('./app/index.html',['copyHtml']);
});

gulp.task('copyImage',function(){
    return gulp.src('./app/images/*.JPG').pipe(gulp.dest('dist/images'));
});

//gulp.task('copyImage',function(){
//    return gulp.src('./app/images/*.{jpg,png}').pipe(gulp.dest('dist/images'));
//});

gulp.task('copyScripts',function(){
    //!加路径名排除不想传的文件  排除文件
    return gulp.src(['./app/scripts/*.js',
        '!./app/scripts/page.js']).pipe(gulp.dest('dist/scripts'));
});

gulp.task('default',['copyHtml','copyImage','copyScripts'],function(){
    console.log('done');
});

