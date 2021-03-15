const gulp = require('gulp')
const { scrape, saveHTML } = require('./helpers')

gulp.task('build:overview', async function (done) {
  const html = await scrape('http://localhost:3000')
  const save = await saveHTML(html, './build', 'root')
  done(save)
})
