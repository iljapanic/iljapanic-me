const browserSync = require('browser-sync');
const config = require('../config');
const cp = require('child_process');
const gulp = require('gulp');
const shell = require('gulp-shell');
const watch = require('gulp-watch');


// const jekyll = process.platform === 'win32' ? 'jekyll.bat' : 'jekyll';
// const messages = {
//   jekyllBuild: '<span style="color: grey">Running:</span> $ jekyll build'
// };

// gulp.task('jekyll-build', function (done) {
//   browserSync.notify(messages.jekyllBuild);
//   return cp.spawn( jekyll , ['build'], {stdio: 'inherit'})
//       .on('close', done);
// });

// gulp.task('jekyll-rebuild', ['jekyll-build'], function () {
//   browserSync.reload();
// });

gulp.task('buildSite', shell.task('jekyll build --incremental'));

gulp.task('jekyll-build', shell.task(['jekyll build --incremental --watch']));
gulp.task('jekyll-build-once', ['buildSite']);

gulp.task('jekyll-serve', function() {
  browserSync.init({
    server: {
      baseDir: config.publicDir
    }
  })
	watch(config.css.watch, function() { gulp.start('css'); });
	watch(config.js.watch, function() { gulp.start('js'); });
  watch([config.images.watch], function() { gulp.start('images'); });
	gulp.watch(config.jekyll.watch).on('change', browserSync.reload);
	gulp.watch(config.jekyll.watchData).on('change', browserSync.reload);
});
