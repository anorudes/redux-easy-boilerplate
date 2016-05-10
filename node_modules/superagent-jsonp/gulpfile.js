var gulp = require('gulp');
var babel = require('gulp-babel');

gulp.task('default', function () {
    return gulp.src('src/superagent-jsonp.js')
        .pipe(babel({ blacklist: ['strict'] }))
        .pipe(gulp.dest('dist'));
});
