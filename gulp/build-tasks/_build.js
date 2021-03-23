const gulp = require('gulp')
require('./clean')
require('./start-server')
require('./overview')
require('./directorates')
require('./functions')
require('./sitemap')
require('./filters')
require('./process-exit')

gulp.task('build', gulp.series([
  'sass',
  'build:clean',
  'build:start-server',
  'build:overview',
  'build:directorates',
  'build:functions',
  'build:sitemap',
  'build:filters',
  'build:process-exit'
]))
