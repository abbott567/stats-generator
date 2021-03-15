function generateSunSettingStats (service, stats) {
  if (service.sunsetting === true) {
    stats.total_sunsetting += 1
  }
  return stats
}

module.exports = { generateSunSettingStats }
