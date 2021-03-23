const express = require('express')
const router = express.Router()

router.get('/readme', (req, res) => {
  res.render('pages/readme/template.njk')
})

module.exports = router
