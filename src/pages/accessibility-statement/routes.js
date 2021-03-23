const express = require('express')
const router = express.Router()

router.get('/accessibility-statement', (req, res) => {
  res.render('pages/accessibility-statement/template.njk', { current_url: req.url })
})

module.exports = router
