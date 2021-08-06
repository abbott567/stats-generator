const express = require('express')
const router = express.Router()
const { filterCriticalServices } = require('../../utils/helpers')

const data = require('../../data/data')

router.get('/critical-services', (req, res) => {
  const filteredData = filterCriticalServices(data)
  res.render('pages/filter-service-critical/template.njk', { current_url: req.url, filteredData })
})

module.exports = router
