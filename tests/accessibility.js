/* global describe, it, after */
process.env.NODE_ENV = 'test'

const chrome = require('selenium-webdriver/chrome')
const chromedriver = require('chromedriver')
const { Builder } = require('selenium-webdriver')
const { expect } = require('chai')
const AxeBuilder = require('@axe-core/webdriverjs')
const { createTestURLs } = require('../src/utils/generate-navigation.data')

chrome.setDefaultService(new chrome.ServiceBuilder(chromedriver.path).build())
const port = process.env.PORT = 8080
const testURL = 'http://localhost'
require('../bin/www')

// const urls = [
//   `${testURL}:${port}/`
// ]
const urls = createTestURLs()

describe('Pages should have no axe-core violations', async () => {
  const driver = new Builder().forBrowser('chrome').build()

  urls.forEach(url => {
    it(`${url.link}`, async () => {
      await driver.get(`${testURL}:${port}${url.link}`)
      const a11y = await new AxeBuilder(driver)
      const results = await a11y.analyze()
      if (results.violations) {
        results.violations.forEach(violation => {
          violation.nodes.forEach(node => {
            console.log(`
            ${violation.description}
            ${node.html}
            impact: ${node.impact}
            `)
          })
        })
      }
      expect(results.violations.length).to.equal(0)
    })
  })

  after(async () => {
    await driver.quit()
  })
})
