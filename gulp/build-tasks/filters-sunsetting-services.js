const gulp = require('gulp')
const { scrape, saveHTML, overwriteURLs } = require('./helpers')

gulp.task('build:filters:sunsetting-services-web', async function (done) {
  const html = await scrape('http://localhost:3000/sunsetting-services')
  const save = await saveHTML(html, './build/web-report/sunsetting-services')
  done(save)
})

gulp.task('build:filters:sunsetting-services-local', async function (done) {
  const html = await scrape('http://localhost:3000/sunsetting-services')
  const htmlLocal = overwriteURLs(html, 'directorate')
  const save = await saveHTML(htmlLocal, './build/local-report/sunsetting-services')
  done(save)
})
