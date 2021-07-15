/* global describe, it */
const { expect } = require('chai')
const data = require('../src/data/data')

describe('Risk statuses should be correct', function () {
  it('services which ARE live should be marked as compliant, high, medium or low risk', function () {
    data.forEach(directorate => {
      directorate.functions.forEach(_function => {
        _function.services.forEach(service => {
          const risk = service.risk
          const status = service.status

          if (status === 'live') {
            const risksArray = ['compliant', 'high', 'medium', 'low']
            expect(risksArray).to.contain(risk, service.name)
          }
        })
      })
    })
  })

  it('services which are NOT live should not be marked as compliant, high, medium or low risk', function () {
    data.forEach(directorate => {
      directorate.functions.forEach(_function => {
        _function.services.forEach(service => {
          const risk = service.risk
          const status = service.status

          if (status !== 'live') {
            const risksArray = ['compliant', 'high', 'medium', 'low']
            expect(risksArray).to.not.contain(risk, service.name)
          }
        })
      })
    })
  })
})
