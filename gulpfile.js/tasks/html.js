var config = require('../config')

var browserSync = require('browser-sync')
var data = require('gulp-data')
var fs = require('fs')
var gulp = require('gulp')
var handleErrors = require('../lib/handleErrors')
var htmlmin = require('gulp-htmlmin')
var nunjucksRender = require('gulp-nunjucks-render')
var path = require('path')

var paths = {
  src: path.join(config.root.src, config.tasks.html.src, '/**/**/**/**/index.{' + config.tasks.html.extensions + '}'),
  dest: path.join(config.root.dest, config.tasks.html.dest),
  nunjuck: path.join(config.root.src, config.tasks.html.src)
}

var getGlobal = function (file) {
  var dataGlobal = path.resolve(config.root.src, config.tasks.html.dataGlobal)
  return JSON.parse(fs.readFileSync(dataGlobal, 'utf8'))
}

var getCv = function (file) {
  var dataCv = path.resolve(config.root.src, config.tasks.html.dataCv)
  return JSON.parse(fs.readFileSync(dataCv, 'utf8'))
}

var getProjects = function (file) {
  var dataProjects = path.resolve(config.root.src, config.tasks.html.dataProjects)
  return JSON.parse(fs.readFileSync(dataProjects, 'utf8'))
}

var getShowcase = function (file) {
  var dataShowcase = path.resolve(config.root.src, config.tasks.html.dataShowcase)
  return JSON.parse(fs.readFileSync(dataShowcase, 'utf8'))
}

var getBooks = function (file) {
  var dataBooks = path.resolve(config.root.src, config.tasks.html.dataBooks)
  return JSON.parse(fs.readFileSync(dataBooks, 'utf8'))
}

var getServices = function (file) {
  var dataServices = path.resolve(config.root.src, config.tasks.html.dataServices)
  return JSON.parse(fs.readFileSync(dataServices, 'utf8'))
}

var htmlTask = function () {
  return gulp.src(paths.src)
    .pipe(data(getGlobal))
    .on('error', handleErrors)
    .pipe(data(getCv))
    .on('error', handleErrors)
    .pipe(data(getProjects))
    .on('error', handleErrors)
    .pipe(data(getShowcase))
    .on('error', handleErrors)
    .pipe(data(getBooks))
    .on('error', handleErrors)
    .pipe(data(getServices))
    .on('error', handleErrors)
    .pipe(nunjucksRender({
      path: [paths.nunjuck]
    }))
    .on('error', handleErrors)
    .pipe(htmlmin(config.tasks.html.htmlmin))
    .on('error', handleErrors)
    .pipe(gulp.dest(paths.dest))
    .pipe(browserSync.stream())
}

gulp.task('html', ['markdown'], htmlTask)
module.exports = htmlTask
