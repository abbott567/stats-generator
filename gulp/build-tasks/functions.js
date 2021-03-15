const gulp = require('gulp')
const { scrape, saveHTML } = require('./helpers')
const { createScrapeURLs } = require('../../src/utils/generate-navigation.data')

const urls = createScrapeURLs()

gulp.task('build:functions', async function (done) {
  for (let i = 0; i < urls.length; i++) {
    const directorate = urls[i]
    for (let ii = 0; ii < directorate.children.length; ii++) {
      const _function = directorate.children[ii]
      const html = await scrape(`http://localhost:3000${_function.link}`)
      await saveHTML(html, `./build${_function.link}`, 'function')
    }
  }
  done()
})
