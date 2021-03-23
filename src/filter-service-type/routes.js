const express = require('express')
const router = express.Router()
const { filterServicesByType } = require('../utils/helpers')

const data = require('../data/data')

router.get('/citizen-facing-services', (req, res) => {
  const type = 'citizen'
  const filteredData = filterServicesByType(data, type)
  res.render('filter-service-type/template.njk', { current_url: req.url, filteredData, type })
})

router.get('/staff-facing-services', (req, res) => {
  const type = 'staff'
  const filteredData = filterServicesByType(data, type)
  res.render('filter-service-type/template.njk', { current_url: req.url, filteredData, type })
})

module.exports = router
