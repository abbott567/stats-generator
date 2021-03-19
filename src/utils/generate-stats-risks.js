function generateRisks (service, stats) {
  if (service.risk === 'high') {
    stats.high_risk += 1
  }

  if (service.risk === 'medium') {
    stats.medium_risk += 1
  }

  if (service.risk === 'low') {
    stats.low_risk += 1
  }

  if (service.risk === 'compliant') {
    stats.compliant_risk += 1
  }

  return stats
}

module.exports = { generateRisks }
