/**
 * Created by Alexandra on 11/9/2015.
 */
var gulp=require('gulp');


gulp.task('copyHtml',function(){
    return gulp.src('./app/index.html').pipe(gulp.dest('dist'));
});