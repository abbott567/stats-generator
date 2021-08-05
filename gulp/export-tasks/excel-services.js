const excel = require('../export-tasks/excel-overrides')

function generateServicesWorksheet (workbook) {
  const wsServices = workbook.addWorksheet(`${excel.tabNames.service}s` || 'Services')
  const { generateStatsForAService } = require('../../src/utils/generate-stats-service')
  const data = require('../../src/data/data')

  wsServices.columns = [
    { header: 'Service name', key: 'service_name', width: 60 },
    { header: 'Alias', key: 'alias', width: 18 },
    { header: (excel.tabNames._function || 'Function'), key: 'function', width: 34 },
    { header: (excel.tabNames.directorate || 'Directorate'), key: 'directorate', width: 34 },
    { header: 'Critical', key: 'critical', width: 18 },
    { header: 'Compliant', key: 'compliant', width: 18 },
    { header: 'Progress', key: 'progress', width: 18 },
    { header: 'Status', key: 'status', width: 7 },
    { header: 'Type', key: 'type', width: 9 },
    { header: 'Risk', key: 'risk', width: 9 },
    { header: 'Sunsetting', key: 'sunsetting', width: 9 },
    { header: 'Planned compliance', key: 'planned_compliance', width: 16 },
    { header: 'WCAG tests', key: 'wcag', width: 9 },
    { header: 'Screen reader tests', key: 'screenreader', width: 15 },
    { header: 'Speech recognition tests', key: 'speech_recognition', width: 19 },
    { header: 'Magnifier tests', key: 'magnifier', width: 12 },
    { header: 'Accessibility statement', key: 'statement', width: 18 },
    { header: 'Notes', key: 'notes', width: 30 }
  ]

  data.forEach(directorate => {
    directorate.functions.forEach(_function => {
      _function.services.forEach(serviceRaw => {
        const service = generateStatsForAService(serviceRaw)
        const override = excel.override({ directorate, _function, service })

        wsServices.addRow({
          directorate: directorate.directorateName || directorate.name,
          function: override.functionName || _function.name,
          service_name: override.serviceName || service.name,
          alias: service.alias,
          critical: service.critical,
          compliant: service.stats.compliant,
          progress: service.stats.progress,
          status: service.status,
          type: service.type,
          risk: service.risk,
          sunsetting: service.sunsetting,
          planned_compliance: service.planned_compliance,
          wcag: service.evidence.wcag.status,
          screenreader: service.evidence.screenreader.status,
          speech_recognition: service.evidence.speech_recognition.status,
          magnifier: service.evidence.magnifier.status,
          statement: service.evidence.statement.status,
          notes: service.notes
        })
      })
    })
  })

  wsServices.getRow(1).font = { size: 12, bold: true }

  return workbook
}

module.exports = { generateServicesWorksheet }
