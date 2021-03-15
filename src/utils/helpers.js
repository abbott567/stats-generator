function getDirectorates (data) { return data }
function getFunctions (directorate) { return directorate.functions }
function getAFunctionsServices (_function) { return _function.services }

function filterLiveServices (data) {
  return data.services.filter(service => service.status === 'live')
}

function filterNotLiveServices (data) {
  return data.services.filter(service => service.status !== 'live')
}

module.exports = {
  getDirectorates,
  getFunctions,
  getAFunctionsServices,
  filterLiveServices,
  filterNotLiveServices
}
