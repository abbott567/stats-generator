const gulp = require('gulp')
const { scrape, saveHTML, overwriteURLs } = require('./helpers')

gulp.task('build:filters:no-plans-for-compliance-web', async function (done) {
  const html = await scrape('http://localhost:3000/no-plans-for-compliance')
  const save = await saveHTML(html, './build/web-report/no-plans-for-compliance')
  done(save)
})

gulp.task('build:filters:no-plans-for-compliance-local', async function (done) {
  const html = await scrape('http://localhost:3000/no-plans-for-compliance')
  const htmlLocal = overwriteURLs(html, 'directorate')
  const save = await saveHTML(htmlLocal, './build/local-report/no-plans-for-compliance')
  done(save)
})
