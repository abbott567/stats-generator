function generatePlannedComplianceStats (service, stats) {
  if (service.status === 'live') {
    if (service.planned_compliance === false) {
      stats.total_descoped += 1
    }
  }
  return stats
}

module.exports = { generatePlannedComplianceStats }
