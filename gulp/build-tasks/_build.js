const gulp = require('gulp')
require('./clean')
require('./start-server')
require('./overview')
require('./directorates')
require('./functions')
require('./process-exit')

gulp.task('build', gulp.series([
  'sass',
  'build:clean',
  'build:start-server',
  'build:overview',
  'build:directorates',
  'build:functions',
  'build:process-exit'
]))
