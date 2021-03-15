const gulp = require('gulp')
const { scrape, saveHTML } = require('./helpers')
const { createScrapeURLs } = require('../../src/utils/generate-navigation.data')

const urls = createScrapeURLs()

gulp.task('build:directorates', async function (done) {
  for (let i = 0; i < urls.length; i++) {
    const directorate = urls[i]
    const html = await scrape(`http://localhost:3000${directorate.link}`)
    await saveHTML(html, `./build${directorate.link}`, 'directorate')
  }
  done()
})
