var gulp = require('gulp'),
    path = require('path'),
    rename = require('gulp-rename'),
    template = require('gulp-template'),
    fs = require('fs'),
    yargs = require('yargs').argv;

var root = './';

var componentsFolder = function(glob) {
  return path.join(root, 'src/components/');
};

var actionsFolder = function(glob) {
  return path.join(root, 'src/actions/');
};

var reducersFolder = function(glob) {
  return path.join(root, 'src/reducers/');
};

var createComponent = function(simpleComponent) {
  var component;

  if (simpleComponent) {
    component = path.join(__dirname, 'generator', 'simple-component/**/*.**');
  } else {
    component = path.join(__dirname, 'generator', 'component/**/*.**');
  }

  var cap = function(val) {
    return val.charAt(0).toUpperCase() + val.slice(1);
  };

  var name = yargs.name,
      parentPath = yargs.parent || '',
      destPath = path.join(componentsFolder(), parentPath, name);

  return gulp.src(component)
    .pipe(template({
      name: name,
      upCaseName: cap(name)
    }))
    .pipe(rename(function(path) {
      path.basename = path.basename.replace('temp', name);
    }))
    .pipe(gulp.dest(destPath));
};

var createReducer = function() {
  var name = yargs.name,
      parentPath = yargs.parent || '',
      destPath = path.join(reducersFolder(), name);

  return gulp.src(path.join(__dirname, 'generator', 'reducer/*.js'))
    .pipe(template({
      name: name,
    }))
    .pipe(rename(function(path) {
      path.basename = path.basename.replace('temp', name);
    }))
    .pipe(gulp.dest(destPath));
};

var createAction = function() {
  var name = yargs.name,
      parentPath = yargs.parent || '',
      destPath = path.join(actionsFolder());

  return gulp.src(path.join(__dirname, 'generator', 'action/*.js'))
    .pipe(template({
      name: name,
    }))
    .pipe(rename(function(path) {
      path.basename = path.basename.replace('temp', name);
    }))
    .pipe(gulp.dest(destPath));
};

gulp.task('simple-component', function() {
  createComponent(true);
});

gulp.task('component', function() {
  createComponent(false);
  createAction();
  createReducer();
});
