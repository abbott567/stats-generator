const gulp = require('gulp')
require('./clean')
require('./start-server')
require('./readme')
require('./overview')
require('./directorates')
require('./functions')
require('./sitemap')
require('./accessibility-statement')
require('./filters')
require('./zip')
require('./process-exit')

gulp.task('build', gulp.series([
  'sass',
  'build:clean',
  'build:start-server',
  'build:readme',
  'build:overview',
  'build:directorates',
  'build:functions',
  'build:sitemap',
  'build:accessibility-statement',
  'build:filters',
  'build:zip',
  'build:process-exit'
]))
