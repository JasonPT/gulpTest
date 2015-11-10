/**
 * Created by Alexandra on 11/9/2015.
 */
var gulp=require('gulp');
gulp.task('hello',function(){
    console.log('hello');
});
gulp.task('world',function(){
    console.log('world');
});

gulp.task('default',['hello','world'],function(){
    console.log('done');
});