const gulp = require('gulp')
const { scrape, saveHTML, overwriteURLs } = require('./helpers')

gulp.task('build:filters:compliant-services-web', async function (done) {
  const html = await scrape('http://localhost:3000/compliant-services')
  const save = await saveHTML(html, './build/web-report/compliant-services')
  done(save)
})

gulp.task('build:filters:compliant-services-local', async function (done) {
  const html = await scrape('http://localhost:3000/compliant-services')
  const htmlLocal = overwriteURLs(html, 'directorate')
  const save = await saveHTML(htmlLocal, './build/local-report/compliant-services')
  done(save)
})
