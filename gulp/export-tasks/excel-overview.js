const config = require('../../src/config')
const dataRaw = require('../../src/data/data')
const { generateStatsForOverview } = require('../../src/utils/generate-stats-overview')

function generateOverviewWorksheet (workbook) {
  const data = generateStatsForOverview(dataRaw)
  const wsOverview = workbook.addWorksheet(config.org_name)

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

  wsOverview.getRow(1).font = { size: 12, bold: true }

  return workbook
}

module.exports = { generateOverviewWorksheet }
