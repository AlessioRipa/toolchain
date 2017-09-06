// Require gulp
var gulp = require('gulp');
// Require gulp plugins
var useref = require('gulp-useref');
var uglify = require('gulp-uglify');
var gulpIf = require('gulp-if');
var cssnano = require('gulp-cssnano');
var cleanCSS = require('gulp-clean-css');


// Optimizing CSS and JavaScript 
gulp.task('useref', function() {

  return gulp.src('dev/*.html')
    .pipe(useref())
    .pipe(gulpIf('dev/**/*.js', uglify()))
    .pipe(gulpIf('dev/**/*.css', cleanCSS({

    })))
    .pipe(gulp.dest('dist'));
});

// Minify CSS
gulp.task('minify-css', function() {
  return gulp.src('dev/**/*.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('dist'));
});