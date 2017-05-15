'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var sourceMaps = require('gulp-sourcemaps');

gulp.task('compile-sass', [], function() {
    return gulp.src('./material-theme.scss')
        .pipe(sourceMaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(sourceMaps.write('./sourcemaps'))
        .pipe(gulp.dest('./dist/'));
});

gulp.task('sass:watch', [], function() {
    gulp.watch('./material-theme.scss', ['compile-sass']);
});

gulp.task('default', [
    'compile-sass',
    'sass:watch'
]);