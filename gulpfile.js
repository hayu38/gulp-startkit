var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer =require('gulp-autoprefixer');
var sourcemaps =require('gulp-sourcemaps');
var cssmin = require('gulp-cssmin');

gulp.task('default', function() {
    console.log("welcome gulp!");
});

gulp.task('sass', function () {
  return gulp.src('./src/sass/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({
        browsers: ["last 2 versions"],
        cascade: false
    }))   
    .pipe(sourcemaps.write('.'))
    .pipe(cssmin())
    .pipe(gulp.dest('./build/css'));
});