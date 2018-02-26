const browserSync = require('browser-sync');
const config = require('../config');
const cssNext = require('postcss-cssnext');
const gcmq = require('gulp-group-css-media-queries');
const gulp = require('gulp');
const handleErrors = require('../lib/handleErrors');
const nano = require('gulp-cssnano');
const postcss = require('gulp-postcss');
const sourcemaps = require('gulp-sourcemaps');
const stylus = require('gulp-stylus');

// PostCSS configuration
const processors = [
  cssNext({
    'browsers': ['last 12 versions'],
    'features': {
      'customProperties': {
        preserve: true,
        appendVariables: true
      },
      'colorFunction': true,
      'customSelectors': true,
      'sourcemap': true,
      'rem': false
    },
  })
];

const cssTask = function() {
  return gulp.src(config.css.src)
    .pipe(stylus())
    .on('error', handleErrors)
    .pipe(postcss(processors))
    .on('error', handleErrors)
    .pipe(gcmq())
    .on('error', handleErrors)
    .pipe(nano({discardComments: {removeAll: true}}))
    .on('error', handleErrors)
    .pipe(gulp.dest(config.css.dest))
    .pipe(browserSync.stream());
}

gulp.task('css', cssTask);
