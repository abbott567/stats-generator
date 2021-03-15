const gulp = require('gulp')

gulp.task('watch-sass', function (done) {
  return gulp.watch([
    'src/assets/sass/**/*.scss',
    'src/common/components/**/*.scss'
  ], gulp.task('sass'), done())
})
