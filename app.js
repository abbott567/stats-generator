const express = require('express')
const path = require('path')
const cookieParser = require('cookie-parser')
const logger = require('morgan')
const nunjucks = require('nunjucks')
const app = express()
const favicon = require('serve-favicon')
const { generateNavigationData } = require('./src/utils/generate-navigation.data')

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

if (process.env.NODE_ENV === 'dev') {
  app.use(
    logger('dev', {
      skip: (req, res) => process.env.NODE_ENV === 'build'
    })
  )
}

app.use(favicon(path.join(__dirname, 'src/assets/favicon', 'favicon.ico')))
app.use('/favicon', express.static('src/assets/favicon'))
app.set('view engine', 'njk')
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())

const navData = generateNavigationData()

app.use('/', (req, res, next) => {
  res.locals.config = require('./src/config')
  res.locals.current_url = res.url
  res.locals.nav = navData
  next()
})

app.use('/', require('./src/pages/readme/routes'))

navData.support_links.forEach(navItem => {
  if (navItem.directory) {
    app.use('/', require(`./${navItem.directory}/routes`))
  }
})

navData.filters.forEach(navItem => {
  if (navItem.directory) {
    app.use('/', require(`./${navItem.directory}/routes`))
  }
})

navData.main.forEach(navItem => {
  if (navItem.directory) {
    app.use('/', require(`./${navItem.directory}/routes`))
  }
  if (navItem.children) {
    navItem.children.forEach(child => {
      app.use('/', require(`./${child.directory}/routes`))
    })
  }
})

app.use('/', (err, req, res, next) => {
  if (err) {
    return next(err)
  }
  next()
})

module.exports = app
