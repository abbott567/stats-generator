const { getAFunctionsServices, sanitizeRates } = require('./helpers')
const { generateStatsForServices, generateStatsForAService } = require('./generate-stats-service')
const { generateCitizenFacingStats } = require('./generate-stats-citizen')
const { generateStaffFacingStats } = require('./generate-stats-staff')
const { generateSunSettingStats } = require('./generate-stats-sunsetting')
const { generateCriticalStats } = require('./generate-stats-critical')
const { generatePlannedComplianceStats } = require('./generate-stats-planned-compliance')
const { generateRisks } = require('./generate-stats-risks')
const {
  generateTrueTotalComplianceRate,
  generateStrategicTotalComplianceRate,
  generateTrueCitizenComplianceRate,
  generateTrueStaffComplianceRate,
  generateStrategicStaffComplianceRate
} = require('./generate-stats-rates')

function generateStatsForFunctions (functions) {
  functions.forEach(_function => {
    const services = getAFunctionsServices(_function)
    generateStatsForServices(services)

    generateStatsForAFunction(_function)
  })
}
function generateStatsForAFunction (_function) {
  const services = getAFunctionsServices(_function)
  const functionStats = {
    total_services: 0,
    total_live: 0,
    total_not_live: 0,
    total_live_compliant: 0,
    total_live_non_compliant: 0,

    total_citizen: 0,
    total_live_citizen: 0,
    total_live_compliant_citizen: 0,
    total_live_non_compliant_citizen: 0,
    total_not_live_citizen: 0,

    total_staff: 0,
    total_live_staff: 0,
    total_live_compliant_staff: 0,
    total_live_non_compliant_staff: 0,
    total_not_live_staff: 0,
    total_staff_after_descope: 0,

    high_risk: 0,
    medium_risk: 0,
    low_risk: 0,
    compliant_risk: 0,
    unknown_risk: 0,

    total_critical: 0,
    total_sunsetting: 0,
    total_descoped: 0,

    rates: {
      true_citizen: 0,
      true_staff: 0,
      strategic_staff: 0,
      true_total: 0,
      strategic_total: 0
    }
  }
  services.forEach(service => {
    generateStatsForAService(service)
    functionStats.total_services += 1
    generateCitizenFacingStats(service, functionStats)
    generateStaffFacingStats(service, functionStats)
    generateCriticalStats(service, functionStats)
    generateSunSettingStats(service, functionStats)
    generatePlannedComplianceStats(service, functionStats)
    generateRisks(service, functionStats)
  })
  generateTrueTotalComplianceRate(functionStats)
  generateStrategicTotalComplianceRate(functionStats)
  generateTrueCitizenComplianceRate(functionStats)
  generateTrueStaffComplianceRate(functionStats)
  generateStrategicStaffComplianceRate(functionStats)

  sanitizeRates(functionStats)

  _function.stats = functionStats
  return _function
}

module.exports = { generateStatsForAFunction, generateStatsForFunctions }
