const gulp = require('gulp')

require('./sass')
require('./watch')
require('./start')
require('./export-tasks/_export')

gulp.task('default', gulp.series(
  'sass',
  'watch-sass',
  'start'
))
