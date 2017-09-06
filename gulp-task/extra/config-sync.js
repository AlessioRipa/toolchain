// Require Gulp
var gulp = require('gulp');
// Require Gulp pluings
var sync = require('gulp-config-sync');

// Synchronize version, name, description, keywords etc.. in each config file 
gulp.task('sync', function() {
  gulp.src(['bower.json'])
    .pipe(sync())
    .pipe(gulp.dest('.')); // write it to the same dir 
});