const data = require('../../src/data/data')
const excel = require('../export-tasks/excel-overrides')

function generateFunctionsWorksheet (workbook) {
  const wsFunctions = workbook.addWorksheet(`${excel.tabNames._function}s` || 'Functions')
  const { generateStatsForAFunction } = require('../../src/utils/generate-stats-function')

  wsFunctions.columns = [
    { header: 'Name', key: 'name', width: 15 },
    { header: 'Aias', key: 'alias', width: 15 },
    { header: (excel.tabNames.directorate || 'Directorate'), key: 'directorate', width: 15 },
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

  data.forEach(directorate => {
    directorate.functions.forEach(_functionRaw => {
      const _function = generateStatsForAFunction(_functionRaw)
      const override = excel.override({ directorate, _function })

      wsFunctions.addRow({
        directorate: override.directorateName || directorate.name,
        name: override.functionName || _function.name,
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
    })
  })

  wsFunctions.getRow(1).font = { size: 12, bold: true }

  return workbook
}

module.exports = { generateFunctionsWorksheet }
