const express = require('express')
const router = express.Router()

const { generateStatsForAFunction } = require('../../utils/generate-stats-function')
const { filterLiveServices, filterNotLiveServices } = require('../../utils/helpers')

router.get('/:directorate/:function', (req, res) => {
  const directorate = req.params.directorate
  const _function = req.params.function
  const data = require(`../../data/${directorate}/functions/${_function}/data`)
  generateStatsForAFunction(data)
  const liveServices = filterLiveServices(data)
  const notLiveServices = filterNotLiveServices(data)
  res.render('pages/function/template.njk', { function: data, liveServices, notLiveServices, current_url: req.url })
})

module.exports = router
