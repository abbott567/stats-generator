const express = require('express')
const router = express.Router()

const data = require('../../data/data')
const { generateStatsForOverview } = require('../../utils/generate-stats-overview')

router.get('/next-steps-for-this-report', (req, res) => {
  generateStatsForOverview(data)
  res.render('pages/next-steps-for-this-report/template.njk', { overview: data, current_url: req.url })
})

module.exports = router
