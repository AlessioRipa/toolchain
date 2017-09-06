var gulp = require('gulp');

var sizereport = require('gulp-sizereport');
 
gulp.task('sizereport', function () {
    return gulp.src('./dist/**/*.+(html|js|css)')
        .pipe(sizereport({
            gzip: true,
            '*': {
                'maxSize': 100000
            },
            'pin.js': {
                'maxMinifiedSize': 5500,
                'maxMinifiedGzippedSize': 2500 
            }
        }));
});