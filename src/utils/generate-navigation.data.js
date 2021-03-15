function createScrapeURLs () {
  const data = require('../data/data')
  const nav = []
  data.forEach(directorate => {
    const navItem = {
      name: directorate.link.replace('/', ''),
      link: directorate.link
    }
    navItem.children = []
    directorate.functions.forEach(_function => {
      navItem.children.push({
        name: _function.link.replace('/', ''),
        link: _function.link
      })
    })
    nav.push(navItem)
  })
  return nav
}

function generateNavigationData (req, res, next) {
  const data = require('../data/data')
  const nav = []
  nav.push({
    name: res.locals.config.org_name + ' overview',
    link: '/',
    active: req.url === '/',
    child_active: false
  })
  data.forEach(directorate => {
    const navItem = {
      name: directorate.name,
      link: directorate.link,
      active: directorate.link === req.url,
      child_active: false
    }
    navItem.children = []
    directorate.functions.forEach(_function => {
      const active = _function.link === req.url
      if (active) {
        navItem.child_active = true
      }
      navItem.children.push({
        name: _function.name,
        link: _function.link,
        active
      })
    })
    nav.push(navItem)
  })
  res.locals.nav = nav
  next()
}

module.exports = { generateNavigationData, createScrapeURLs }
