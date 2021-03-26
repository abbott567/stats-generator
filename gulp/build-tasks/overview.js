const gulp = require('gulp')
const { scrape, saveHTML, overwriteURLs } = require('./helpers')

gulp.task('build:overview-web', async function (done) {
  const html = await scrape('http://localhost:3000')
  const save = await saveHTML(html, './build/web-report')
  done(save)
})

gulp.task('build:overview-local', async function (done) {
  const html = await scrape('http://localhost:3000')
  const htmlLocal = overwriteURLs(html, 'root')
  const save = await saveHTML(htmlLocal, './build/local-report')
  done(save)
})

gulp.task('build:overview', gulp.parallel([
  'build:overview-web',
  'build:overview-local'
]))
