function generateStatsForServices (services) {
  services.forEach(service => {
    generateStatsForAService(service)
  })
}
function generateStatsForAService (service) {
  const stats = {
    compliant: false,
    progress: 0
  }
  if (service.evidence.wcag.status === 'passed') {
    stats.progress += 20
  }
  if (service.evidence.screenreader.status === 'passed') {
    stats.progress += 20
  }
  if (service.evidence.speech_recognition.status === 'passed') {
    stats.progress += 20
  }
  if (service.evidence.magnifier.status === 'passed') {
    stats.progress += 20
  }
  if (service.evidence.statement.status === 'done') {
    stats.progress += 20
  }
  if (stats.progress === 100) {
    stats.compliant = true
  }
  service.stats = stats
  return service
}

module.exports = { generateStatsForAService, generateStatsForServices }
