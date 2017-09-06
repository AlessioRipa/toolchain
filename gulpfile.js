// Require gulp
var gulp = require('gulp');
// Require gulp plugins
var runSequence = require('run-sequence');
var requireDir = require('require-dir');


// Require all tasks.
requireDir( 'gulp-task', { recurse: true } );

// Build Sequences
// ---------------

gulp.task('default', function(callback) {
  runSequence(['sass', 'browserSync'], 'watch',
    callback
  )
})

gulp.task('build', function(callback) {
  runSequence(
    'clean:dist',
    'sass',
    ['useref', 'images', 'fonts'],
    ['css','js'],
    'minify-css',
    callback
  )
})