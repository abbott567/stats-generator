const gulp = require('gulp')
const { scrape, saveHTML } = require('./helpers')

gulp.task('build:accessibility-statement', async function (done) {
  const html = await scrape('http://localhost:3000/accessibility-statement')
  await saveHTML(html, './build/accessibility-statement', 'directorate')
  done()
})
