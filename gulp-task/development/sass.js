// Require gulp
var gulp = require('gulp');
// Require gulp plugins
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var sourcemaps = require('gulp-sourcemaps');
var browserSync = require('browser-sync');

// Compile Sass files
gulp.task('sass', function() {
  return gulp.src('dev/scss/**/*.scss') // Gets all files ending with .scss in dev/scss and children dirs
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError)) // Passes it through a gulp-sass, log errors to console
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('dev/css')) // Outputs it in the css folder
    .pipe(browserSync.reload({ // Reloading with Browser Sync
      stream: true
    }));
})