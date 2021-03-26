const gulp = require('gulp')
const { scrape, saveHTML, overwriteURLs } = require('./helpers')

gulp.task('build:sitemap-web', async function (done) {
  const html = await scrape('http://localhost:3000/sitemap')
  await saveHTML(html, './build/web-report/sitemap')
  done()
})

gulp.task('build:sitemap-local', async function (done) {
  const html = await scrape('http://localhost:3000/sitemap')
  const htmlLocal = overwriteURLs(html, 'directorate')
  const save = await saveHTML(htmlLocal, './build/local-report/sitemap')
  done(save)
})

gulp.task('build:sitemap', gulp.parallel([
  'build:sitemap-web',
  'build:sitemap-local'
]))
