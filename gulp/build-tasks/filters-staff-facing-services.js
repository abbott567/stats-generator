const gulp = require('gulp')
const { scrape, saveHTML, overwriteURLs } = require('./helpers')

gulp.task('build:filters:staff-facing-services-web', async function (done) {
  const html = await scrape('http://localhost:3000/staff-facing-services')
  const save = await saveHTML(html, './build/web-report/staff-facing-services')
  done(save)
})

gulp.task('build:filters:staff-facing-services-local', async function (done) {
  const html = await scrape('http://localhost:3000/staff-facing-services')
  const htmlLocal = overwriteURLs(html, 'directorate')
  const save = await saveHTML(htmlLocal, './build/local-report/staff-facing-services')
  done(save)
})
