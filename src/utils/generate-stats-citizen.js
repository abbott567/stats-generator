function generateCitizenFacingStats (service, stats) {
  if (service.type === 'citizen') {
    stats.total_citizen += 1
    if (service.status === 'live') {
      stats.total_live += 1
      stats.total_live_citizen += 1
      if (service.stats.progress === 100) {
        stats.total_live_compliant += 1
        stats.total_live_compliant_citizen += 1
      } else {
        stats.total_live_non_compliant += 1
        stats.total_live_non_compliant_citizen += 1
      }
    } else {
      stats.total_not_live_citizen += 1
      stats.total_not_live += 1
    }
  }
  return stats
}

module.exports = { generateCitizenFacingStats }
