const fs = require('fs')
const htmlmin = require('htmlmin')
const got = require('got')
const cheerio = require('cheerio')

function overwriteURLs (html, level) {
  const $ = cheerio.load(html)
  $('a').each(function () {
    const link = $(this).attr('href')
    const isNotJumpLink = !link.match(/#/)
    const isNotInternetLink = !link.match(/http/)
    const isRootURL = link === '/'

    if (isRootURL) {
      let newLink = ''
      if (level === 'root') {
        newLink = link.replace(/\//, 'index.html')
        return $(this).attr('href', newLink)
      } else if (level === 'directorate') {
        newLink = link.replace(/\//, '../index.html')
        return $(this).attr('href', newLink)
      } else if (level === 'function') {
        newLink = link.replace(/\//, '../../index.html')
      }
      return $(this).attr('href', newLink)
    }

    if (isNotJumpLink && isNotInternetLink) {
      if (level === 'root') {
        const newLink = link.replace(/\//, '')
        return $(this).attr('href', newLink + '/index.html')
      } else if (level === 'directorate') {
        let newLink = ''
        const linkWithoutFirstSlash = link.replace(/\//, '')
        newLink = '../' + linkWithoutFirstSlash
        return $(this).attr('href', newLink + '/index.html')
      } else {
        let newLink = ''
        const linkWithoutFirstSlash = link.replace(/\//, '')
        newLink = '../../' + linkWithoutFirstSlash
        return $(this).attr('href', newLink + '/index.html')
      }
    }
  })
  return $.html()
}

async function saveHTML (html, folder, level, name = 'index') {
  const filename = `${name}.html`
  if (!fs.existsSync(`${folder}`)) {
    fs.mkdirSync(`${folder}`)
  }
  html = overwriteURLs(html, level)
  fs.writeFileSync(`${folder}/${filename}`, html, (err) => {
    if (err) {
      console.log(err)
    }
  })
}

async function scrape (url) {
  const response = await got(url)
  return htmlmin(
    response.body,
    {
      collapseWhitespace: true,
      removeComments: true
    }
  )
}

module.exports = { saveHTML, scrape }
