const gulp = require('gulp')
const { scrape, saveHTML, overwriteURLs } = require('./helpers')
const { createScrapeURLs } = require('./helpers')

const urls = createScrapeURLs()

gulp.task('build:functions-web', async function (done) {
  for (let i = 0; i < urls.length; i++) {
    const directorate = urls[i]
    for (let ii = 0; ii < directorate.children.length; ii++) {
      const _function = directorate.children[ii]
      const html = await scrape(`http://localhost:3000${_function.link}`)
      await saveHTML(html, `./build/web-report${_function.link}`)
    }
  }
  done()
})

gulp.task('build:functions-local', async function (done) {
  for (let i = 0; i < urls.length; i++) {
    const directorate = urls[i]
    for (let ii = 0; ii < directorate.children.length; ii++) {
      const _function = directorate.children[ii]
      const html = await scrape(`http://localhost:3000${_function.link}`)
      const htmlLocal = overwriteURLs(html, 'function')
      await saveHTML(htmlLocal, `./build/local-report${_function.link}`)
    }
  }
  done()
})

gulp.task('build:functions', gulp.parallel([
  'build:functions-web',
  'build:functions-local'
]))
