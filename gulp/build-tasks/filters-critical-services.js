const gulp = require('gulp')
const { scrape, saveHTML, overwriteURLs } = require('./helpers')

gulp.task('build:filters:critical-services-web', async function (done) {
  const html = await scrape('http://localhost:3000/critical-services')
  const save = await saveHTML(html, './build/web-report/critical-services')
  done(save)
})

gulp.task('build:filters:critical-services-local', async function (done) {
  const html = await scrape('http://localhost:3000/critical-services')
  const htmlLocal = overwriteURLs(html, 'directorate')
  const save = await saveHTML(htmlLocal, './build/local-report/critical-services')
  done(save)
})
