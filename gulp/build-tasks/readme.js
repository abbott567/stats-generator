const gulp = require('gulp')
const { scrape, saveHTML } = require('./helpers')

gulp.task('build:readme', async function (done) {
  const html = await scrape('http://localhost:3000/readme')
  await saveHTML(html, './build', 'root', 'README')
  done()
})
