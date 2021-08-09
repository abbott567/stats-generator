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

function createTestURLs () {
  const data = require('../data/data')
  const nav = []

  // Overview
  nav.push({
    name: 'Overview',
    link: '/'
  })

  // Directorates
  data.forEach(directorate => {
    const navItem = {
      name: directorate.link.replace('/', ''),
      link: directorate.link
    }
    nav.push(navItem)

    // Functions
    directorate.functions.forEach(_function => {
      const navItem = {
        link: _function.link,
        name: _function.link.replace('/', '')
      }
      nav.push(navItem)
    })
  })

  // Filters
  nav.push({
    name: 'Compliant services',
    link: '/compliant-services'
  })
  nav.push({
    name: 'High risk services',
    link: '/high-risk-services'
  })
  nav.push({
    name: 'Medium risk services',
    link: '/medium-risk-services'
  })
  nav.push({
    name: 'Low risk services',
    link: '/low-risk-services'
  })
  nav.push({
    name: 'Unknown risk services',
    link: '/unknown-risk-services'
  })
  nav.push({
    name: 'Citizen facing services',
    link: '/citizen-facing-services'
  })
  nav.push({
    name: 'Staff facing services',
    link: '/staff-facing-services'
  })
  nav.push({
    name: 'Critical services',
    link: '/critical-services'
  })
  nav.push({
    name: 'Sunsetting services',
    link: '/sunsetting-services'
  })
  nav.push({
    name: 'No plans for compliance',
    link: '/no-plans-for-compliance'
  })

  // Support links
  nav.push({
    name: 'Accessibility statement',
    link: '/accessibility-statement'
  })
  nav.push({
    name: 'Next steps for this report',
    link: '/next-steps-for-this-report'
  })
  nav.push({
    name: 'Sitemap',
    link: '/sitemap'
  })
  return nav
}

module.exports = { generateNavigationData, createScrapeURLs, createTestURLs }
