// Require gulp
var gulp = require('gulp');

// Copying fonts 
gulp.task('fonts', function() {
  return gulp.src('dev/fonts')
    .pipe(gulp.dest('dist'))
})

// Copying css to destination
gulp.task('css', function() {
  return gulp.src('dev/css/**/*.css')
    .pipe(gulp.dest('dist/css'))
})

// Copying js to destination
gulp.task('js', function() {
  return gulp.src('dev/js/**/*.js')
    .pipe(gulp.dest('dist/js'))
})