var gulp = require('gulp');

var twig = require('gulp-twig');

// Compile Twig templates to HTML
gulp.task('render-twig', function() {
    return gulp.src('dev/template/*.html') // run the Twig template parser on all .html files in the "src" directory
        .pipe(twig())
        .pipe(gulp.dest('dist')); // output the rendered HTML files to the "dist" directory
});