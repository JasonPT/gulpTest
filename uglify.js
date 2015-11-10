/**
 * Created by Alexandra on 11/9/2015.
 */
var gulp=require('gulp');
var sass=require('gulp-sass');
var less=require('gulp-less');
var connect=require('gulp-connect');
var concat=require('gulp-concat');
var uglify=require('gulp-urglify');

//合并文件
gulp.task('compress',function(){
    return gulp.src(['./app/scripts/*.js',
        './app/scripts/page.js']).pipe(concat('join.js')).piple(ugligy())
        .pipe(gulp.dest('dist/scripts'));
});


