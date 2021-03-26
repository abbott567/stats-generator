const gulp = require('gulp')
const { scrape, saveHTML, overwriteURLs } = require('./helpers')

gulp.task('build:filters:citizen-facing-services-web', async function (done) {
  const html = await scrape('http://localhost:3000/citizen-facing-services')
  const save = await saveHTML(html, './build/web-report/citizen-facing-services')
  done(save)
})

gulp.task('build:filters:citizen-facing-services-local', async function (done) {
  const html = await scrape('http://localhost:3000/citizen-facing-services')
  const htmlLocal = overwriteURLs(html, 'directorate')
  const save = await saveHTML(htmlLocal, './build/local-report/citizen-facing-services')
  done(save)
})
