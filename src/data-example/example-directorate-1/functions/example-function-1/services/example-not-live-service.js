module.exports = {
  name: 'Example not-live service', // blank / name of service
  alias: 'ELS', // blank / alias of service
  status: 'not live', // live / not live
  type: 'staff', // citizen / staff
  risk: 'high', // compliant / high / medium / low / unknown
  critical: false, // true / false
  sunsetting: false, // true / false
  planned_compliance: false, // true / false
  evidence: {
    wcag: {
      status: 'failed' // passed / failed / not done
    },
    screenreader: {
      status: 'failed' // passed / failed / not done
    },
    speech_recognition: {
      status: 'failed' // passed / failed not done
    },
    magnifier: {
      status: 'failed' // passed / failed not done
    },
    statement: {
      status: 'not done', // done / not done
      link: '' // blank / http://example.com
    }
  },
  notes: `
    Some notes to explain why the service has been categoriesed and what work is 
    in progress.
  `
}
