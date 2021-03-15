const gulp = require('gulp')

gulp.task('build:start-server', function (done) {
  process.env.NODE_ENV = 'build'
  require('../../bin/www')
  done()
})
