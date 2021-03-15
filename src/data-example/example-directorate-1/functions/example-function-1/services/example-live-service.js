module.exports = {
  name: 'Example live service', // blank / name of service
  alias: 'ELS', // blank / alias of service
  status: 'live', // live / not live
  type: 'citizen', // citizen / staff
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
  }
}
