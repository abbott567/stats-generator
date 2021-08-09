const gulp = require('gulp')
const del = require('del')
const fs = require('fs')

gulp.task('build:clean', async function (done) {
  if (fs.existsSync('./build')) {
    await del(['build/**/*'])
  } else {
    fs.mkdirSync('./build')
  }
  fs.mkdirSync('./build/local-report')
  fs.mkdirSync('./build/web-report')

  return done()
})
