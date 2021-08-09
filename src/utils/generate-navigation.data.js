function generateNavigationData () {
  const data = require('../data/data')
  const nav = {
    main: [],
    filters: [],
    support_links: []
  }

  // Overview
  nav.main.push({
    name: 'Overview',
    link: '/',
    directory: 'src/pages/overview',
    children: []
  })

  // Directorates
  data.forEach(directorate => {
    const parentItem = {
      name: directorate.name,
      link: directorate.link,
      directory: 'src/pages/directorate',
      children: []
    }

    // Functions
    directorate.functions.forEach(_function => {
      const childItem = {
        name: _function.name,
        link: _function.link,
        directory: 'src/pages/function'
      }
      parentItem.children.push(childItem)
    })

    nav.main.push(parentItem)
  })

  // Filters
  nav.filters.push({
    name: 'Compliant services',
    link: '/compliant-services',
    directory: 'src/pages/filter-service-compliant',
    children: []
  })
  nav.filters.push({
    name: 'High risk services',
    link: '/high-risk-services',
    directory: 'src/pages/filter-service-risk',
    children: []
  })
  nav.filters.push({
    name: 'Medium risk services',
    link: '/medium-risk-services',
    directory: 'src/pages/filter-service-risk',
    children: []
  })
  nav.filters.push({
    name: 'Low risk services',
    link: '/low-risk-services',
    directory: 'src/pages/filter-service-risk',
    children: []
  })
  nav.filters.push({
    name: 'Unknown risk services',
    link: '/unknown-risk-services',
    directory: 'src/pages/filter-service-risk',
    children: []
  })
  nav.filters.push({
    name: 'Citizen facing services',
    link: '/citizen-facing-services',
    directory: 'src/pages/filter-service-type',
    children: []
  })
  nav.filters.push({
    name: 'Staff facing services',
    link: '/staff-facing-services',
    directory: 'src/pages/filter-service-type',
    children: []
  })
  nav.filters.push({
    name: 'Critical services',
    link: '/critical-services',
    directory: 'src/pages/filter-service-critical',
    children: []
  })
  nav.filters.push({
    name: 'Sunsetting services',
    link: '/sunsetting-services',
    directory: 'src/pages/filter-service-sunsetting',
    children: []
  })
  nav.filters.push({
    name: 'No plans for compliance',
    link: '/no-plans-for-compliance',
    directory: 'src/pages/filter-no-plans-for-compliance',
    children: []
  })

  // Support links
  nav.support_links.push({
    name: 'Accessibility statement',
    link: '/accessibility-statement',
    directory: 'src/pages/accessibility-statement',
    children: []
  })
  nav.support_links.push({
    name: 'Next steps for this report',
    link: '/next-steps-for-this-report',
    directory: 'src/pages/next-steps-for-this-report',
    children: []
  })
  nav.support_links.push({
    name: 'Sitemap',
    link: '/sitemap',
    directory: 'src/pages/sitemap',
    children: []
  })

  return nav
}

module.exports = { generateNavigationData }
