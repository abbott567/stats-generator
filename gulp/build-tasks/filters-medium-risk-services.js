const gulp = require('gulp')
const { scrape, saveHTML, overwriteURLs } = require('./helpers')

gulp.task('build:filters:medium-risk-services-web', async function (done) {
  const html = await scrape('http://localhost:3000/medium-risk-services')
  const save = await saveHTML(html, './build/web-report/medium-risk-services')
  done(save)
})

gulp.task('build:filters:medium-risk-services-local', async function (done) {
  const html = await scrape('http://localhost:3000/medium-risk-services')
  const htmlLocal = overwriteURLs(html, 'directorate')
  const save = await saveHTML(htmlLocal, './build/local-report/medium-risk-services')
  done(save)
})
