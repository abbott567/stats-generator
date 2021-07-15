const data = require('../../src/data/data')
const { generateStatsForADirectorate } = require('../../src/utils/generate-stats-directorate')
const excel = require('../export-tasks/excel-overrides')

function generateDirectoratesWorksheet (workbook) {
  const wsDirectorates = workbook.addWorksheet(`${excel.tabNames.directorate}s` || 'Directorates')

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

  data.forEach(directorateRaw => {
    const directorate = generateStatsForADirectorate(directorateRaw)
    const override = excel.override({ directorate })

    wsDirectorates.addRow({
      name: override.directorateName || directorate.name,
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
  })

  wsDirectorates.getRow(1).font = { size: 12, bold: true }

  return workbook
}

module.exports = { generateDirectoratesWorksheet }
