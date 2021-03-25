const express = require('express')
const router = express.Router()
const { filterSunsettingServices } = require('../../utils/helpers')

const data = require('../../data/data')

router.get('/sunsetting-services', (req, res) => {
  const filteredData = filterSunsettingServices(data)
  res.render('pages/filter-service-sunsetting/template.njk', { current_url: req.url, filteredData })
})

module.exports = router
