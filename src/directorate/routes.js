const express = require('express')
const router = express.Router()

const { generateStatsForADirectorate } = require('../utils/generate-stats-directorate')

router.get('/:directorate', (req, res) => {
  const directorate = req.params.directorate
  const data = require(`../data/${directorate}/data`)
  generateStatsForADirectorate(data)
  res.render('directorate/template.njk', { directorate: data, current_url: req.url })
})

module.exports = router
