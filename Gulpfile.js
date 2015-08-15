var gulp = require('gulp'),
  path = require('path'),
  rename = require('gulp-rename'),
  template = require('gulp-template'),
  fs = require('fs'),
  yargs = require('yargs').argv;

var root = './';

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

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
    destPath = path.join(path.join(root, 'src/components/'), parentPath, capitalizeFirstLetter(name));

  console.log('\n\n\tCongratulations!\n' +
    '\n\tJust now you created a `' + name + '` component.' +
    '\n\tTo use component follow few steps:\n\n' +
    '\t1. To export component add line to the ./src/components/index.js:\n' +
    '\x1b[35m', "\t   export { default as " + name + " } from './" + name + "/" + name + ".js';\n\n" +
    '\x1b[0m', '\t2. To import component add line to the ./src/Main.js\n' +
    '\x1b[35m', "\t   import { " + name + " } from './components/';\n");

  return gulp.src(component)
    .pipe(template({
      name: capitalizeFirstLetter(name),
      upCaseName: cap(name)
    }))
    .pipe(rename(function(path) {
      path.basename = path.basename.replace('temp', name);
    }))
    .pipe(gulp.dest(destPath));
};

var createTemplate = function(type, folder, file) {
  var name = yargs.name,
    parentPath = yargs.parent || '',
    destPath = path.join(path.join(root, folder));

  if (type === 'action') {
    console.log('\x1b[0m', '\t3. Actions. Add line to the ./src/actions/index.js:\n' +
      '\x1b[35m', '\t   export { ' + name + ' } from ./' + name + '.js;\n');
  } else {
    console.log('\x1b[0m', '\t4. Reducers. Add line to the ./src/reducers/index.js:\n' +
      '\x1b[35m', '\t   export { ' + name + ' } from ./' + name + '.js;\n\n');
  }

  return gulp.src(path.join(__dirname, 'generator', file))
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
  createTemplate('action', 'src/actions/', 'action/*.js');
  createTemplate('reducer', 'src/reducers/', 'reducer/*.js');
});

var help = function() {
  console.log('\n\tusage: gulp [simple-component] --name <name>\n' +
    '\tusage: gulp [component] --name <name>\n');
};

gulp.task('default', function() {
  help();
});