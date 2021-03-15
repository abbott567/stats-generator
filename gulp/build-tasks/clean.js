const gulp = require('gulp')
const del = require('del')
const fs = require('fs')

gulp.task('build:clean', function (done) {
  if (fs.existsSync('./build')) {
    return del(['build/**/*'])
  } else {
    fs.mkdirSync('./build')
  }
  return done()
})
