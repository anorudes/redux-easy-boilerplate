var gulp = require('gulp');
var sass = require('gulp-sass');

var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var eslint = require('gulp-eslint');

gulp.task('sass', function() {
  gulp.src('./src/styles/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./dist/styles'));
});

// Development
gulp.task('files-development', function() {
  // Images
  gulp.src('./src/images/**')
    .pipe(gulp.dest('./dist/images/'));
  // SVG
  gulp.src('./src/svg/**')
    .pipe(gulp.dest('./dist/svg/'));
});

// Build
// gulp.task('styles', function() {
//   gulp.src('./dist/styles/**/*.css')
//     .pipe(concat('bundle.css'))
//     .pipe(gulp.dest('./swayerapp/platforms/ios/www/dist/'));
// });
// gulp.task('scripts', function() {
//   gulp.src('./dist/bundle.js')
//     .pipe(uglify())
//     .pipe(concat('bundle.js'))
//     .pipe(gulp.dest('./swayerapp/platforms/ios/www/dist/'));
// });

gulp.task('lint', function() {
  return gulp.src(['src/scripts/**/*.js'])
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failOnError());
});

gulp.task('default', ['files-development'], function() {
  // gulp.watch(['src/**/*.scss', 'src/**/*.css'], ['sass']);
});

gulp.task('eslint', ['lint'], function() {

});
