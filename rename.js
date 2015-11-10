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
//合并文件
gulp.task('rename',function(){
    return gulp.src(['./app/scripts/*.js',
        './app/scripts/page.js']).pipe(concat('join.js')).pipe(uglify()).
        pipe(rename('join.min.js'))
        .pipe(gulp.dest('dist/scripts'));
});


