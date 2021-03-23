const express = require('express')
const router = express.Router()
const { filterServicesByRisk } = require('../../utils/helpers')

const data = require('../../data/data')

router.get('/compliant-services', (req, res) => {
  const filteredData = filterServicesByRisk(data, 'compliant')
  res.render('pages/filter-service-compliant/template.njk', { current_url: req.url, filteredData })
})

module.exports = router
