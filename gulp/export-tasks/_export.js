const gulp = require('gulp')

const Excel = require('exceljs')
const dataRaw = require('../../src/data/data')
const config = require('../../src/config')
const { format } = require('date-fns')
const date = format(new Date(), 'yyyy-MM-dd')
const filename = `${date}-excel-export.xlsx`

const { generateStatsForAService } = require('../../src/utils/generate-stats-service')
const { generateStatsForAFunction } = require('../../src/utils/generate-stats-function')
const { generateStatsForADirectorate } = require('../../src/utils/generate-stats-directorate')
const { generateStatsForOverview } = require('../../src/utils/generate-stats-overview')

gulp.task('export:excel', async function (done) {
  const workbook = new Excel.Workbook()
  const wsOverview = workbook.addWorksheet(config.org_name)
  const wsDirectorates = workbook.addWorksheet('Directorates')
  const wsFunctions = workbook.addWorksheet('Functions')
  const wsServices = workbook.addWorksheet('Services')
  const data = generateStatsForOverview(dataRaw)

  wsServices.columns = [
    { header: 'Service name', key: 'service_name', width: 60 },
    { header: 'Alias', key: 'alias', width: 18 },
    { header: 'Function', key: 'function', width: 34 },
    { header: 'Directorate', key: 'directorate', width: 34 },
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

  wsFunctions.columns = [
    { header: 'Name', key: 'name', width: 15 },
    { header: 'Aias', key: 'alias', width: 15 },
    { header: 'Directorate', key: 'directorate', width: 15 },
    { header: 'True compliance %', key: 'rates_true_total', width: 15 },
    { header: 'True compliance citizen %', key: 'rates_true_citizen', width: 15 },
    { header: 'True compliance staff %', key: 'rates_true_staff', width: 15 },
    { header: 'Strategic compliance %', key: 'rates_strategic_total', width: 15 },
    { header: 'Strategic compliance citizen %', key: 'rates_strategic_citizen', width: 15 },
    { header: 'Strategic compliance staff %', key: 'rates_strategic_staff', width: 15 },
    { header: 'Total services', key: 'total_services', width: 15 },
    { header: 'Total compliant', key: 'compliant_risk', width: 15 },
    { header: 'High risk', key: 'high_risk', width: 15 },
    { header: 'Medium risk', key: 'medium_risk', width: 15 },
    { header: 'Low risk', key: 'low_risk', width: 15 },
    { header: 'Sunsetting', key: 'total_sunsetting', width: 15 },
    { header: 'Citizen facing', key: 'total_citizen', width: 15 },
    { header: 'Staff facing', key: 'total_staff', width: 15 },
    { header: 'Total live', key: 'total_live', width: 15 },
    { header: 'Total live and compliant', key: 'total_live_compliant', width: 15 },
    { header: 'Total live and non-compliant', key: 'total_live_non_compliant', width: 15 },
    { header: 'Total live citizen facing', key: 'total_live_citizen', width: 15 },
    { header: 'Total live compliant citizen facing', key: 'total_live_compliant_citizen', width: 15 },
    { header: 'Total live non-compliant citizen facing', key: 'total_live_non_compliant_citizen', width: 15 },
    { header: 'Total not-live citizen facing', key: 'total_not_live_citizen', width: 15 },
    { header: 'Total not-live staff facing', key: 'total_live_staff', width: 15 },
    { header: 'Total live compliant staff facing', key: 'total_live_compliant_staff', width: 15 },
    { header: 'Total live non-compliant staff facing', key: 'total_live_non_compliant_staff', width: 15 },
    { header: 'Total not-live staff facing', key: 'total_not_live_staff', width: 15 }
  ]

  wsDirectorates.columns = [
    { header: 'Name', key: 'name', width: 15 },
    { header: 'Aias', key: 'alias', width: 15 },
    { header: 'True compliance %', key: 'rates_true_total', width: 15 },
    { header: 'True compliance citizen %', key: 'rates_true_citizen', width: 15 },
    { header: 'True compliance staff %', key: 'rates_true_staff', width: 15 },
    { header: 'Strategic compliance %', key: 'rates_strategic_total', width: 15 },
    { header: 'Strategic compliance citizen %', key: 'rates_strategic_citizen', width: 15 },
    { header: 'Strategic compliance staff %', key: 'rates_strategic_staff', width: 15 },
    { header: 'Total services', key: 'total_services', width: 15 },
    { header: 'Total compliant', key: 'compliant_risk', width: 15 },
    { header: 'High risk', key: 'high_risk', width: 15 },
    { header: 'Medium risk', key: 'medium_risk', width: 15 },
    { header: 'Low risk', key: 'low_risk', width: 15 },
    { header: 'Sunsetting', key: 'total_sunsetting', width: 15 },
    { header: 'Citizen facing', key: 'total_citizen', width: 15 },
    { header: 'Staff facing', key: 'total_staff', width: 15 },
    { header: 'Total live', key: 'total_live', width: 15 },
    { header: 'Total live and compliant', key: 'total_live_compliant', width: 15 },
    { header: 'Total live and non-compliant', key: 'total_live_non_compliant', width: 15 },
    { header: 'Total live citizen facing', key: 'total_live_citizen', width: 15 },
    { header: 'Total live compliant citizen facing', key: 'total_live_compliant_citizen', width: 15 },
    { header: 'Total live non-compliant citizen facing', key: 'total_live_non_compliant_citizen', width: 15 },
    { header: 'Total not-live citizen facing', key: 'total_not_live_citizen', width: 15 },
    { header: 'Total not-live staff facing', key: 'total_live_staff', width: 15 },
    { header: 'Total live compliant staff facing', key: 'total_live_compliant_staff', width: 15 },
    { header: 'Total live non-compliant staff facing', key: 'total_live_non_compliant_staff', width: 15 },
    { header: 'Total not-live staff facing', key: 'total_not_live_staff', width: 15 }
  ]

  wsOverview.columns = [
    { header: 'True compliance %', key: 'rates_true_total', width: 15 },
    { header: 'True compliance citizen %', key: 'rates_true_citizen', width: 15 },
    { header: 'True compliance staff %', key: 'rates_true_staff', width: 15 },
    { header: 'Strategic compliance %', key: 'rates_strategic_total', width: 15 },
    { header: 'Strategic compliance citizen %', key: 'rates_strategic_citizen', width: 15 },
    { header: 'Strategic compliance staff %', key: 'rates_strategic_staff', width: 15 },
    { header: 'Total services', key: 'total_services', width: 15 },
    { header: 'Total compliant', key: 'compliant_risk', width: 15 },
    { header: 'High risk', key: 'high_risk', width: 15 },
    { header: 'Medium risk', key: 'medium_risk', width: 15 },
    { header: 'Low risk', key: 'low_risk', width: 15 },
    { header: 'Sunsetting', key: 'total_sunsetting', width: 15 },
    { header: 'Citizen facing', key: 'total_citizen', width: 15 },
    { header: 'Staff facing', key: 'total_staff', width: 15 },
    { header: 'Total live', key: 'total_live', width: 15 },
    { header: 'Total live and compliant', key: 'total_live_compliant', width: 15 },
    { header: 'Total live and non-compliant', key: 'total_live_non_compliant', width: 15 },
    { header: 'Total live citizen facing', key: 'total_live_citizen', width: 15 },
    { header: 'Total live compliant citizen facing', key: 'total_live_compliant_citizen', width: 15 },
    { header: 'Total live non-compliant citizen facing', key: 'total_live_non_compliant_citizen', width: 15 },
    { header: 'Total not-live citizen facing', key: 'total_not_live_citizen', width: 15 },
    { header: 'Total not-live staff facing', key: 'total_live_staff', width: 15 },
    { header: 'Total live compliant staff facing', key: 'total_live_compliant_staff', width: 15 },
    { header: 'Total live non-compliant staff facing', key: 'total_live_non_compliant_staff', width: 15 },
    { header: 'Total not-live staff facing', key: 'total_not_live_staff', width: 15 }
  ]
  wsOverview.addRow({
    rates_true_total: data.stats.rates.true_total,
    rates_true_citizen: data.stats.rates.true_citizen,
    rates_true_staff: data.stats.rates.true_staff,
    rates_strategic_total: data.stats.rates.strategic_total,
    rates_strategic_citizen: data.stats.rates.true_citizen,
    rates_strategic_staff: data.stats.rates.strategic_staff,
    total_services: data.stats.total_services,
    compliant_risk: data.stats.compliant_risk,
    high_risk: data.stats.high_risk,
    medium_risk: data.stats.medium_risk,
    low_risk: data.stats.low_risk,
    total_sunsetting: data.stats.total_sunsetting,
    total_live: data.stats.total_live,
    total_live_compliant: data.stats.total_live_compliant,
    total_live_non_compliant: data.stats.total_live_non_compliant,
    total_citizen: data.stats.total_citizen,
    total_live_citizen: data.stats.total_live_citizen,
    total_live_compliant_citizen: data.stats.total_live_compliant_citizen,
    total_live_non_compliant_citizen: data.stats.total_live_non_compliant_citizen,
    total_not_live_citizen: data.stats.total_not_live_citizen,
    total_staff: data.stats.total_staff,
    total_live_staff: data.stats.total_live_staff,
    total_live_compliant_staff: data.stats.total_live_compliant_staff,
    total_live_non_compliant_staff: data.stats.total_live_non_compliant_staff,
    total_not_live_staff: data.stats.total_not_live_staff
  })

  data.forEach(directorateRaw => {
    const directorate = generateStatsForADirectorate(directorateRaw)
    wsDirectorates.addRow({
      name: directorate.name,
      alias: directorate.alias,
      rates_true_total: directorate.stats.rates.true_total,
      rates_true_citizen: directorate.stats.rates.true_citizen,
      rates_true_staff: directorate.stats.rates.true_staff,
      rates_strategic_total: directorate.stats.rates.strategic_total,
      rates_strategic_citizen: directorate.stats.rates.true_citizen,
      rates_strategic_staff: directorate.stats.rates.strategic_staff,
      total_services: directorate.stats.total_services,
      compliant_risk: directorate.stats.compliant_risk,
      high_risk: directorate.stats.high_risk,
      medium_risk: directorate.stats.medium_risk,
      low_risk: directorate.stats.low_risk,
      total_sunsetting: directorate.stats.total_sunsetting,
      total_live: directorate.stats.total_live,
      total_live_compliant: directorate.stats.total_live_compliant,
      total_live_non_compliant: directorate.stats.total_live_non_compliant,
      total_citizen: directorate.stats.total_citizen,
      total_live_citizen: directorate.stats.total_live_citizen,
      total_live_compliant_citizen: directorate.stats.total_live_compliant_citizen,
      total_live_non_compliant_citizen: directorate.stats.total_live_non_compliant_citizen,
      total_not_live_citizen: directorate.stats.total_not_live_citizen,
      total_staff: directorate.stats.total_staff,
      total_live_staff: directorate.stats.total_live_staff,
      total_live_compliant_staff: directorate.stats.total_live_compliant_staff,
      total_live_non_compliant_staff: directorate.stats.total_live_non_compliant_staff,
      total_not_live_staff: directorate.stats.total_not_live_staff
    })

    directorate.functions.forEach(_functionRaw => {
      const _function = generateStatsForAFunction(_functionRaw)

      wsFunctions.addRow({
        directorate: directorate.name,
        name: _function.name,
        alias: _function.alias,
        rates_true_total: _function.stats.rates.true_total,
        rates_true_citizen: _function.stats.rates.true_citizen,
        rates_true_staff: _function.stats.rates.true_staff,
        rates_strategic_total: _function.stats.rates.strategic_total,
        rates_strategic_citizen: _function.stats.rates.true_citizen,
        rates_strategic_staff: _function.stats.rates.strategic_staff,
        total_services: _function.stats.total_services,
        compliant_risk: _function.stats.compliant_risk,
        high_risk: _function.stats.high_risk,
        medium_risk: _function.stats.medium_risk,
        low_risk: _function.stats.low_risk,
        total_sunsetting: _function.stats.total_sunsetting,
        total_live: _function.stats.total_live,
        total_live_compliant: _function.stats.total_live_compliant,
        total_live_non_compliant: _function.stats.total_live_non_compliant,
        total_citizen: _function.stats.total_citizen,
        total_live_citizen: _function.stats.total_live_citizen,
        total_live_compliant_citizen: _function.stats.total_live_compliant_citizen,
        total_live_non_compliant_citizen: _function.stats.total_live_non_compliant_citizen,
        total_not_live_citizen: _function.stats.total_not_live_citizen,
        total_staff: _function.stats.total_staff,
        total_live_staff: _function.stats.total_live_staff,
        total_live_compliant_staff: _function.stats.total_live_compliant_staff,
        total_live_non_compliant_staff: _function.stats.total_live_non_compliant_staff,
        total_not_live_staff: _function.stats.total_not_live_staff
      })

      _function.services.forEach(serviceRaw => {
        const service = generateStatsForAService(serviceRaw)
        wsServices.addRow({
          directorate: directorate.name,
          function: _function.name,
          service_name: service.name,
          alias: service.alias,
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

  await workbook.xlsx.writeFile(`build/${filename}`)

  console.log('File is written')
})

gulp.task('excel', gulp.series([
  'export:excel'
]))
