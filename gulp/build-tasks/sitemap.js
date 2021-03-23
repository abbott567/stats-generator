const gulp = require('gulp')
const { scrape, saveHTML } = require('./helpers')

gulp.task('build:sitemap', async function (done) {
  const html = await scrape('http://localhost:3000/sitemap')
  await saveHTML(html, './build/sitemap', 'directorate')
  done()
})
