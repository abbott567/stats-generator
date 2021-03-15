const gulp = require('gulp')
const nodemon = require('nodemon')

gulp.task('start', function (done) {
  nodemon({
    script: './bin/www',
    ext: 'js njk scss',
    env: { NODE_ENV: 'development' },
    watch: ['**/*'],
    done: done
  })
})
