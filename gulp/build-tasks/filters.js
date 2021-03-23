const gulp = require('gulp')
const { scrape, saveHTML } = require('./helpers')

const filters = [
  'compliant-services',
  'high-risk-services',
  'medium-risk-services',
  'low-risk-services',
  'citizen-facing-services',
  'staff-facing-services'
]

filters.forEach(filter => {
  gulp.task(`build:${filter}`, async function (done) {
    const html = await scrape(`http://localhost:3000/${filter}`)
    await saveHTML(html, `./build/${filter}`, 'directorate')
    done()
  })
})

gulp.task('build:filters', gulp.series([
  'build:compliant-services',
  'build:high-risk-services',
  'build:medium-risk-services',
  'build:low-risk-services',
  'build:citizen-facing-services',
  'build:staff-facing-services'
]))
