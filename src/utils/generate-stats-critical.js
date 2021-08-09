function generateCriticalStats (service, stats) {
  if (service.critical === true) {
    stats.total_critical += 1
  }
  return stats
}

module.exports = { generateCriticalStats }
