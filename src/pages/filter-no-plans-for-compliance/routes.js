const express = require('express')
const router = express.Router()
const { filterNoPlansForCompliance } = require('../../utils/helpers')

const data = require('../../data/data')

router.get('/no-plans-for-compliance', (req, res) => {
  const filteredData = filterNoPlansForCompliance(data)
  res.render('pages/filter-no-plans-for-compliance/template.njk', { current_url: req.url, filteredData })
})

module.exports = router
