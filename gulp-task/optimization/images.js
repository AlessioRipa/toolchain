// Require gulp
var gulp = require('gulp');
// Require gulp plugins
var imagemin = require('gulp-imagemin');
var cache = require('gulp-cache');

// Optimizing Images
gulp.task('images', function() {
  return gulp.src('dev/images/**/*.+(png|jpg|jpeg|gif|svg)')
    // Caching images that ran through imagemin
    .pipe(cache(imagemin({
      interlaced: true,
      progressive: true,
      optimizationLevel: 5,
      svgoPlugins: [{removeViewBox: true}],
      verbose: true,
    })))
    .pipe(gulp.dest('dist/images'))
});

gulp.task('cache:clear', function (callback) {
return cache.clearAll(callback)
})
