const browserSync = require('browser-sync');
const config = require('../config');
const gulp = require('gulp');
const handleErrors = require('../lib/handleErrors');
const sourcemaps = require('gulp-sourcemaps');
const uglify = require('gulp-uglify');

const jsTask = function() {
  return gulp.src(config.js.src)
    .pipe(sourcemaps.init())
		.pipe(uglify())
    .on('error', handleErrors)
    .pipe(sourcemaps.write('.'))
		.pipe(gulp.dest(config.js.dest))
    .pipe(browserSync.stream());
};

gulp.task('js', jsTask);
