var gulp       = require('gulp');
var ts         = require('gulp-typescript');
var browserify = require('gulp-browserify');

var tsConfig = ts.createProject('tsconfig.json');

gulp.task('compile-js', function() {
    var tsResult = tsConfig.src()
                           .pipe(ts(tsConfig));

    return tsResult.js
                   .pipe(browserify())
                   .pipe(gulp.dest('./.build/'));
});
