// Require gulp
var gulp = require('gulp');
// Require gulp plugins
var browserSync = require('browser-sync');

// Start browserSync server
gulp.task('browserSync', function() {
  browserSync({
    server: {
      baseDir: 'dev'
    }
  })
})