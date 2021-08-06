const gulp = require('gulp')
const { scrape, saveHTML, overwriteURLs } = require('./helpers')

gulp.task('build:filters:unknown-risk-services-web', async function (done) {
  const html = await scrape('http://localhost:3000/unknown-risk-services')
  const save = await saveHTML(html, './build/web-report/unknown-risk-services')
  done(save)
})

gulp.task('build:filters:unknown-risk-services-local', async function (done) {
  const html = await scrape('http://localhost:3000/unknown-risk-services')
  const htmlLocal = overwriteURLs(html, 'directorate')
  const save = await saveHTML(htmlLocal, './build/local-report/unknown-risk-services')
  done(save)
})
