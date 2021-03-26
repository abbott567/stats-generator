const gulp = require('gulp')
const { scrape, saveHTML, overwriteURLs } = require('./helpers')
const { createScrapeURLs } = require('../../src/utils/generate-navigation.data')

const urls = createScrapeURLs()

gulp.task('build:directorates-web', async function (done) {
  for (let i = 0; i < urls.length; i++) {
    const directorate = urls[i]
    const html = await scrape(`http://localhost:3000${directorate.link}`)
    await saveHTML(html, `./build/web-report${directorate.link}`)
  }
  done()
})

gulp.task('build:directorates-local', async function (done) {
  for (let i = 0; i < urls.length; i++) {
    const directorate = urls[i]
    const html = await scrape(`http://localhost:3000${directorate.link}`)
    const htmlLocal = overwriteURLs(html, 'directorate')
    await saveHTML(htmlLocal, `./build/local-report${directorate.link}`)
  }
  done()
})

gulp.task('build:directorates', gulp.parallel([
  'build:directorates-web',
  'build:directorates-local'
]))
