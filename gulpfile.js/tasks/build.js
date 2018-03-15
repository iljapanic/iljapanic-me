const gulp = require('gulp');
const runSequence = require('run-sequence');

gulp.task('build', function(cb) {
  runSequence('assets', 'jekyll-build-once', cb);
});
