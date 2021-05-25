const gulp = require('gulp')

require('./sass')
require('./watch')
require('./start')

gulp.task('default', gulp.series(
  'sass',
  'watch-sass',
  'start'
))
