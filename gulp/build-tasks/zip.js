const gulp = require('gulp')
const zip = require('gulp-zip')
const { format } = require('date-fns')

gulp.task('build:zip', function () {
  const date = format(new Date(), 'yyyy-MM-dd')
  const filename = `${date}-html-download.zip`
  return gulp.src('./build/local-report/**/*')
    .pipe(zip(filename))
    .pipe(gulp.dest('./build'))
})
