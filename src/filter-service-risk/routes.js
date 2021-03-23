const express = require('express')
const router = express.Router()
const { filterServicesByRisk } = require('../utils/helpers')

const data = require('../data/data')

router.get('/:riskLevel-risk-services', (req, res) => {
  const riskLevel = req.params.riskLevel
  const filteredData = filterServicesByRisk(data, riskLevel)
  res.render('filter-service-risk/template.njk', { current_url: req.url, filteredData, riskLevel })
})

module.exports = router
