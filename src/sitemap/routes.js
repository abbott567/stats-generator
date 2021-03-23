const express = require('express')
const router = express.Router()

const data = require('../data/data')

router.get('/sitemap', (req, res) => {
  res.render('sitemap/template.njk', { current_url: req.url, data })
})

module.exports = router
