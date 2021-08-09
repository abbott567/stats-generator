/* global describe, it */
const { expect } = require('chai')
const { generateStatsForAFunction } = require('../src/utils/generate-stats-function')
const raw = require('../src/data/data')

raw.forEach(directorate => {
  directorate.functions.forEach(_function => {
    const data = generateStatsForAFunction(_function)
    let liveServicesCount = 0
    let highRiskCount = 0
    let medRiskCount = 0
    let lowRiskCount = 0
    let compliantCount = 0
    let criticalCount = 0
    let staffFacingCount = 0
    let citizenFacingCount = 0

    _function.services.forEach(service => {
      if (service.status === 'live') {
        liveServicesCount++
        if (service.type === 'citizen') {
          citizenFacingCount++
        } else if (service.type === 'staff') {
          staffFacingCount++
        }

        if (service.risk === 'high') {
          highRiskCount++
        } else if (service.risk === 'medium') {
          medRiskCount++
        } else if (service.risk === 'low') {
          lowRiskCount++
        } else if (service.risk === 'compliant') {
          compliantCount++
        }

        if (service.critical) {
          criticalCount++
        }
      }
    })

    describe(`The statistics for ${_function.name} should be accurate`, function () {
      it('stats reported for total number of live services should be correct', function () {
        expect(data.stats.total_live).to.equal(liveServicesCount)
      })
      it('stats reported for compliant services should be correct', function () {
        expect(data.stats.compliant_risk).to.equal(compliantCount)
      })
      it('stats reported for high risk services should be correct', function () {
        expect(data.stats.high_risk).to.equal(highRiskCount)
      })
      it('stats reported for medium risk services should be correct', function () {
        expect(data.stats.medium_risk).to.equal(medRiskCount)
      })
      it('stats reported for low risk services should be correct', function () {
        expect(data.stats.low_risk).to.equal(lowRiskCount)
      })
      it('stats reported for high, medium, low and compliant services should equal total live services', function () {
        const total = data.stats.high_risk + data.stats.medium_risk + data.stats.low_risk + data.stats.compliant_risk
        expect(total).to.equal(liveServicesCount)
      })
      it('stats reported for critical services should be correct', function () {
        expect(data.stats.total_critical).to.equal(criticalCount)
      })
      it('stats reported for number of live citizen facing services should be correct', function () {
        expect(data.stats.total_live_citizen).to.equal(citizenFacingCount)
      })
      it('stats reported for number of live staff facing services should be correct', function () {
        expect(data.stats.total_live_staff).to.equal(staffFacingCount)
      })
      it('live citizen facing + live staff facing should equal total services', function () {
        expect(data.stats.total_live_citizen + data.stats.total_live_staff).to.equal(liveServicesCount)
      })
    })
  })
})
