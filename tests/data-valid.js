/* global describe, it */
const { expect } = require('chai')
const data = require('../src/data/data')

describe('The JSON data should be valid', function () {
  it('should have a status attr of [live], [not live]', function () {
    data.forEach(directorate => {
      directorate.functions.forEach(_function => {
        _function.services.forEach(service => {
          const attribute = service.status
          const attributesAllowed = ['live', 'not live']
          expect(attributesAllowed).to.contain(attribute, service.name)
        })
      })
    })
  })

  it('should have a type attr of [citizen, staff]', function () {
    data.forEach(directorate => {
      directorate.functions.forEach(_function => {
        _function.services.forEach(service => {
          const attribute = service.type
          const attributesAllowed = ['citizen', 'staff']
          expect(attributesAllowed).to.contain(attribute, service.name)
        })
      })
    })
  })

  it('should have a critical attr of [true, false]', function () {
    data.forEach(directorate => {
      directorate.functions.forEach(_function => {
        _function.services.forEach(service => {
          const attribute = service.critical
          const attributesAllowed = [true, false]
          expect(attributesAllowed).to.contain(attribute, service.name)
        })
      })
    })
  })

  it('should have a risk attr of [high, medium, low, compliant, unknown, n/a]', function () {
    data.forEach(directorate => {
      directorate.functions.forEach(_function => {
        _function.services.forEach(service => {
          const attribute = service.risk
          const attributesAllowed = ['high', 'medium', 'low', 'compliant', 'unknown', 'n/a']
          expect(attributesAllowed).to.contain(attribute, service.name)
        })
      })
    })
  })

  it('should have a sunsetting attr of [true, false]', function () {
    data.forEach(directorate => {
      directorate.functions.forEach(_function => {
        _function.services.forEach(service => {
          const attribute = service.sunsetting
          const attributesAllowed = [true, false]
          expect(attributesAllowed).to.contain(attribute, service.name)
        })
      })
    })
  })

  it('should have a planned_compliance attr of [true, false]', function () {
    data.forEach(directorate => {
      directorate.functions.forEach(_function => {
        _function.services.forEach(service => {
          const attribute = service.planned_compliance
          const attributesAllowed = [true, false]
          expect(attributesAllowed).to.contain(attribute, service.name)
        })
      })
    })
  })

  it('should have a evidence.wcag.status attr of [passed, failed, not done]', function () {
    data.forEach(directorate => {
      directorate.functions.forEach(_function => {
        _function.services.forEach(service => {
          const attribute = service.evidence.wcag.status
          const attributesAllowed = ['passed', 'failed', 'not done']
          expect(attributesAllowed).to.contain(attribute, service.name)
        })
      })
    })
  })

  it('should have a evidence.screenreader.status attr of [passed, failed, not done]', function () {
    data.forEach(directorate => {
      directorate.functions.forEach(_function => {
        _function.services.forEach(service => {
          const attribute = service.evidence.screenreader.status
          const attributesAllowed = ['passed', 'failed', 'not done']
          expect(attributesAllowed).to.contain(attribute, service.name)
        })
      })
    })
  })

  it('should have a evidence.speech_recognition.status attr of [passed, failed, not done]', function () {
    data.forEach(directorate => {
      directorate.functions.forEach(_function => {
        _function.services.forEach(service => {
          const attribute = service.evidence.speech_recognition.status
          const attributesAllowed = ['passed', 'failed', 'not done']
          expect(attributesAllowed).to.contain(attribute, service.name)
        })
      })
    })
  })

  it('should have a evidence.magnifier.status attr of [passed, failed, not done]', function () {
    data.forEach(directorate => {
      directorate.functions.forEach(_function => {
        _function.services.forEach(service => {
          const attribute = service.evidence.magnifier.status
          const attributesAllowed = ['passed', 'failed', 'not done']
          expect(attributesAllowed).to.contain(attribute, service.name)
        })
      })
    })
  })

  it('should have a evidence.statement.status attr of [done, not done]', function () {
    data.forEach(directorate => {
      directorate.functions.forEach(_function => {
        _function.services.forEach(service => {
          const attribute = service.evidence.statement.status
          const attributesAllowed = ['done', 'not done']
          expect(attributesAllowed).to.contain(attribute, service.name)
        })
      })
    })
  })
})
