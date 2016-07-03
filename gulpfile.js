var autoprefixer = require('gulp-autoprefixer')
var browserSync = require('browser-sync')
var cssnano = require('gulp-cssnano')
var del = require('del')
var gmq = require('gulp-group-css-media-queries')
var gulp = require('gulp')
var imagemin = require('gulp-imagemin')
var notify = require('gulp-notify')
var nunjucksRender = require('gulp-nunjucks-render')
var sass = require('gulp-sass')
var sourcemaps = require('gulp-sourcemaps')
var uglify = require('gulp-uglify')

var reload = browserSync.reload

function handleErrors () {
  var args = Array.prototype.slice.call(arguments)

  notify.onError({
    title: 'Compile Error',
    message: '<%= error.message %>'
  }).apply(this, args)
  this.emit('end') // Keep gulp from hanging on this task
}

/* 'browser-sync' */
gulp.task('browser-sync', function () {
  browserSync.init({
    server: {
      baseDir: './dist/'
    }
  })
})

/* 'html' */
gulp.task('html', function () {
  return gulp.src('src/html/**/**/**/index.html')
    .pipe(nunjucksRender({
      path: ['src/html/']
    }))
    .pipe(gulp.dest('dist'))
    .pipe(reload({stream: true}))
})

/* 'styles' */
gulp.task('styles', function () {
  return gulp.src('src/scss/*.scss')
		.pipe(sourcemaps.init())
		.pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    .pipe(gmq())
    .pipe(cssnano())
		.pipe(sourcemaps.write('.'))
		.pipe(gulp.dest('./dist/css/'))
		.pipe(reload({stream: true}))
})

/* 'images' */
gulp.task('images', function () {
  return gulp.src('src/images/**/**/*.{png,jpeg,jpg,gif,svg}')
    .on('error', handleErrors)
		.pipe(imagemin())
		.pipe(gulp.dest('./dist/img/'))
    .pipe(reload({stream: true}))
})

/* 'scripts' */
gulp.task('scripts', function () {
  return gulp.src('src/javascript/**/**/*.js')
    .on('error', handleErrors)
    .pipe(uglify())
    .pipe(gulp.dest('./dist/js/'))
    .pipe(reload({stream: true}))
})

/* 'clean' */
gulp.task('clean', function () {
  return del([
    'dist/**/**/**/*'
  ])
})

/* 'build' */
gulp.task('build', ['html', 'images', 'styles', 'scripts'])

/* 'default' with watch */
gulp.task('default', ['html', 'images', 'styles', 'scripts', 'browser-sync'], function () {
  gulp.watch('src/images/**/**/**/*', ['images'])
  gulp.watch('src/html/**/**/**/*', ['html'])
  gulp.watch('src/scss/**/**/**/*', ['styles'])
  gulp.watch('src/javascript/**/**/**/*', ['scripts'])
})
