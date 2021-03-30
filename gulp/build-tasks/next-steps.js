const gulp = require('gulp')
const { scrape, saveHTML, overwriteURLs } = require('./helpers')

gulp.task('build:next-steps-web', async function (done) {
  const html = await scrape('http://localhost:3000/next-steps-for-this-report')
  await saveHTML(html, './build/web-report/next-steps-for-this-report')
  done()
})

gulp.task('build:next-steps-local', async function (done) {
  const html = await scrape('http://localhost:3000/next-steps-for-this-report')
  const htmlLocal = overwriteURLs(html, 'directorate')
  const save = await saveHTML(htmlLocal, './build/local-report/next-steps-for-this-report')
  done(save)
})

gulp.task('build:next-steps', gulp.parallel([
  'build:next-steps-web',
  'build:next-steps-local'
]))
