module.exports = {
  name: 'Example live service', // blank / name of service
  alias: 'ELS', // blank / alias of service
  status: 'live', // live / not live
  type: 'citizen', // citizen / staff
  risk: 'low', // compliant / high / medium / low / unknown
  critical: false, // true / false
  sunsetting: false, // true / false
  planned_compliance: true, // true / false
  evidence: {
    wcag: {
      status: 'failed' // passed / failed / not done
    },
    screenreader: {
      status: 'passed' // passed / failed / not done
    },
    speech_recognition: {
      status: 'passed' // passed / failed not done
    },
    magnifier: {
      status: 'passed' // passed / failed not done
    },
    statement: {
      status: 'done', // done / not done
      link: '#link-to-statement-if-public-url' // blank / http://example.com
    }
  },
  notes: `
    Some notes to explain why the service has been categoriesed and what work is 
    in progress.
  `
}
