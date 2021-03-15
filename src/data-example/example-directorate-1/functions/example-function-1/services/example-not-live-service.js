module.exports = {
  name: 'Example not-live service', // blank / name of service
  alias: 'ELS', // blank / alias of service
  status: 'not live', // live / not live
  type: 'staff', // citizen / staff
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
  }
}
