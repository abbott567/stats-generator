const gulp = require('gulp')
const { scrape, saveHTML, overwriteURLs } = require('./helpers')

gulp.task('build:filters:low-risk-services-web', async function (done) {
  const html = await scrape('http://localhost:3000/low-risk-services')
  const save = await saveHTML(html, './build/web-report/low-risk-services')
  done(save)
})

gulp.task('build:filters:low-risk-services-local', async function (done) {
  const html = await scrape('http://localhost:3000/low-risk-services')
  const htmlLocal = overwriteURLs(html, 'directorate')
  const save = await saveHTML(htmlLocal, './build/local-report/low-risk-services')
  done(save)
})
