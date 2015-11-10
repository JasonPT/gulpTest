/**
 * Created by Alexandra on 11/9/2015.
 */
var gulp=require('gulp');
var sass=require('gulp-sass');
var less=require('gulp-less');
var connect=require('gulp-connect');
var concat=require('gulp-concat');


//合并文件
gulp.task('concatScript',function(){
    return gulp.src(['./app/scripts/*.js',
        './app/scripts/page.js']).pipe(concat('join.js'))
        .pipe(gulp.dest('dist/scripts'));
});


