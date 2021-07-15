/* global describe, it */
const { expect } = require('chai')
const data = require('../src/data/data')

describe('The evidence provided and the compliance status be correct', function () {
  it('services with all 5 bits of evidence passed, should be marked as compliant', function () {
    data.forEach(directorate => {
      directorate.functions.forEach(_function => {
        _function.services.forEach(service => {
          const risk = service.risk
          const wcag = service.evidence.wcag.status
          const screenreader = service.evidence.screenreader.status
          const speechRecognition = service.evidence.speech_recognition.status
          const magnifier = service.evidence.magnifier.status
          const statement = service.evidence.statement.status

          let evidenceCounter = 0

          if (wcag === 'passed') {
            evidenceCounter++
          }
          if (screenreader === 'passed') {
            evidenceCounter++
          }
          if (speechRecognition === 'passed') {
            evidenceCounter++
          }
          if (magnifier === 'passed') {
            evidenceCounter++
          }
          if (statement === 'done') {
            evidenceCounter++
          }

          if (evidenceCounter === 5) {
            expect(risk).to.equal('compliant')
          }
        })
      })
    })
  })

  it('services with less than 5 bits of evidence passed, should not be marked as compliant', function () {
    data.forEach(directorate => {
      directorate.functions.forEach(_function => {
        _function.services.forEach(service => {
          const risk = service.risk
          const wcag = service.evidence.wcag.status
          const screenreader = service.evidence.screenreader.status
          const speechRecognition = service.evidence.speech_recognition.status
          const magnifier = service.evidence.magnifier.status
          const statement = service.evidence.statement.status

          let evidenceCounter = 0

          if (wcag === 'passed') {
            evidenceCounter++
          }
          if (screenreader === 'passed') {
            evidenceCounter++
          }
          if (speechRecognition === 'passed') {
            evidenceCounter++
          }
          if (magnifier === 'passed') {
            evidenceCounter++
          }
          if (statement === 'done') {
            evidenceCounter++
          }

          if (evidenceCounter < 5) {
            expect(risk).to.not.equal('compliant', service.name)
          }
        })
      })
    })
  })
})
