function generateStaffFacingStats (service, stats) {
  if (service.type === 'staff') {
    stats.total_staff += 1
    if (service.status === 'live') {
      stats.total_live_staff += 1
      stats.total_live += 1
      if (service.stats.progress === 100) {
        stats.total_live_compliant += 1
        stats.total_live_compliant_staff += 1
      } else {
        stats.total_live_non_compliant += 1
        stats.total_live_non_compliant_staff += 1
      }
    } else {
      stats.total_not_live_staff += 1
      stats.total_not_live += 1
    }
  }
  return stats
}

module.exports = { generateStaffFacingStats }
