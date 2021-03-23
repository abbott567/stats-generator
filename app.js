const express = require('express')
const path = require('path')
const cookieParser = require('cookie-parser')
const logger = require('morgan')
const nunjucks = require('nunjucks')
const app = express()
const favicon = require('serve-favicon')

const njENV = nunjucks.configure(
  [
    'node_modules/govuk-frontend/',
    'src'
  ],
  {
    express: app,
    autoescape: true
  }
)

njENV.addFilter('isNaN', num => {
  if (isNaN(num)) {
    return true
  }
  return false
})

app.use(
  logger('dev', {
    skip: (req, res) => process.env.NODE_ENV === 'build'
  })
)

app.use('/', (req, res, next) => {
  res.locals.config = require('./src/config')
  next()
})

app.use(favicon(path.join(__dirname, 'src/assets/favicon', 'favicon.ico')))
app.use('/favicon', express.static('src/assets/favicon'))
app.set('view engine', 'njk')
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())

const { generateNavigationData } = require('./src/utils/generate-navigation.data')
app.use(generateNavigationData)
app.use('/', require('./src/pages/readme/routes'))
app.use('/', require('./src/pages/accessibility-statement/routes'))
app.use('/', require('./src/pages/sitemap/routes'))
app.use('/', require('./src/pages/filter-service-type/routes'))
app.use('/', require('./src/pages/filter-service-risk/routes'))
app.use('/', require('./src/pages/filter-service-compliant/routes'))
app.use('/', require('./src/pages/overview/routes'))
app.use('/', require('./src/pages/directorate/routes'))
app.use('/', require('./src/pages/function/routes'))

app.use('/', (err, req, res, next) => {
  if (err) {
    return next(err)
  }
  next()
})

module.exports = app
