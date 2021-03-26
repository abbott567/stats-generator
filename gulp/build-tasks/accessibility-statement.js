const gulp = require('gulp')
const { scrape, saveHTML, overwriteURLs } = require('./helpers')

gulp.task('build:accessibility-statement-web', async function (done) {
  const html = await scrape('http://localhost:3000/accessibility-statement')
  await saveHTML(html, './build/web-report/accessibility-statement')
  done()
})

gulp.task('build:accessibility-statement-local', async function (done) {
  const html = await scrape('http://localhost:3000/accessibility-statement')
  const htmlLocal = overwriteURLs(html, 'directorate')
  await saveHTML(htmlLocal, './build/local-report/accessibility-statement')
  done()
})

gulp.task('build:accessibility-statement', gulp.parallel([
  'build:accessibility-statement-web',
  'build:accessibility-statement-local'
]))
