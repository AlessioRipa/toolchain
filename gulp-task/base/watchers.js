// Require gulp
var gulp = require('gulp');
// Require gulp plugins
var sass = require('gulp-sass');
var browserSync = require('browser-sync');

// Watchers
gulp.task('watch', function() {
  gulp.watch('dev/scss/**/*.scss', ['sass']);
  gulp.watch('dev/*.html', browserSync.reload);
  gulp.watch('dev/js/**/*.js', browserSync.reload);
})