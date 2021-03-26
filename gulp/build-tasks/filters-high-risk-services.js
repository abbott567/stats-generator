const gulp = require('gulp')
const { scrape, saveHTML, overwriteURLs } = require('./helpers')

gulp.task('build:filters:high-risk-services-web', async function (done) {
  const html = await scrape('http://localhost:3000/high-risk-services')
  const save = await saveHTML(html, './build/web-report/high-risk-services')
  done(save)
})

gulp.task('build:filters:high-risk-services-local', async function (done) {
  const html = await scrape('http://localhost:3000/high-risk-services')
  const htmlLocal = overwriteURLs(html, 'directorate')
  const save = await saveHTML(htmlLocal, './build/local-report/high-risk-services')
  done(save)
})
