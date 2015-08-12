var gulp = require('gulp'),
  path = require('path'),
  rename = require('gulp-rename'),
  template = require('gulp-template'),
  fs = require('fs'),
  yargs = require('yargs').argv;

var resolveToComponents = function(glob) {
  glob = glob || '';
  return path.join(root, 'src/components/', glob);
};

var root = './';

var paths = {
  js: resolveToComponents('**/*!(.spec.js).js'),
  output: root,
  blankTemplates: path.join(__dirname, 'generator', 'component/**/*.**')
};

gulp.task('simple-component', function() {
  var cap = function(val) {
    return val.charAt(0).toUpperCase() + val.slice(1);
  };

  var name = yargs.name;
  var parentPath = yargs.parent || '';
  var destPath = path.join(resolveToComponents(), parentPath, name);

  return gulp.src(paths.blankTemplates)
    .pipe(template({
      name: name,
      upCaseName: cap(name)
    }))
    .pipe(rename(function(path) {
      path.basename = path.basename.replace('temp', name);
    }))
    .pipe(gulp.dest(destPath));
});
