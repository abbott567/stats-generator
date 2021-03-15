function generateTrueStaffComplianceRate (stats) {
  const total = stats.total_live_staff
  const compliant = stats.total_live_compliant_staff
  stats.rates.true_staff = Math.round((compliant / total) * 100)
  return stats
}
function generateStrategicStaffComplianceRate (stats) {
  const total = stats.total_live_staff - stats.total_descoped
  const compliant = stats.total_live_compliant_staff
  stats.rates.strategic_staff = Math.round((compliant / total) * 100)
  return stats
}

function generateTrueCitizenComplianceRate (stats) {
  const total = stats.total_live_citizen
  const compliant = stats.total_live_compliant_citizen
  stats.rates.true_citizen = Math.round((compliant / total) * 100)
  return stats
}

function generateStrategicTotalComplianceRate (stats) {
  const total = stats.total_live - stats.total_descoped
  const compliant = stats.total_live_compliant
  stats.rates.strategic_total = Math.round((compliant / total) * 100)
  return stats
}

function generateTrueTotalComplianceRate (stats) {
  const total = stats.total_live
  const compliant = stats.total_live_compliant
  stats.rates.true_total = Math.round((compliant / total) * 100)
  return stats
}

module.exports = {
  generateTrueStaffComplianceRate,
  generateStrategicStaffComplianceRate,
  generateTrueCitizenComplianceRate,
  generateStrategicTotalComplianceRate,
  generateTrueTotalComplianceRate
}
