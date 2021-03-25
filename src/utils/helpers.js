function getDirectorates (data) { return JSON.parse(JSON.stringify(data)) }
function getFunctions (directorate) { return directorate.functions }
function getAFunctionsServices (_function) { return _function.services }

function filterLiveServices (data) {
  return data.services.filter(service => service.status === 'live')
}

function filterNotLiveServices (data) {
  return data.services.filter(service => service.status !== 'live')
}

function filterSunsettingServices (data) {
  const directorates = getDirectorates(data)
  const allServices = []
  const stats = { service_count: 0 }
  directorates.forEach(directorate => {
    const _functions = getFunctions(directorate)
    _functions.forEach(_function => {
      const services = getAFunctionsServices(_function)
      const filteredServices = []
      services.forEach(service => {
        if (service.sunsetting === true) {
          stats.service_count += 1
          filteredServices.push(service)
        }
      })
      _function.services = filteredServices
    })
    allServices.push(directorate)
  })
  const newData = allServices
  newData.stats = stats
  return newData
}

function filterServicesByType (data, type) {
  const directorates = getDirectorates(data)
  const allServices = []
  const stats = { service_count: 0 }
  directorates.forEach(directorate => {
    const _functions = getFunctions(directorate)
    _functions.forEach(_function => {
      const services = getAFunctionsServices(_function)
      const filteredServices = []
      services.forEach(service => {
        if (service.type === type) {
          stats.service_count += 1
          filteredServices.push(service)
        }
      })
      _function.services = filteredServices
    })
    allServices.push(directorate)
  })
  const newData = allServices
  newData.stats = stats
  return newData
}

function filterServicesByRisk (data, risk) {
  const directorates = getDirectorates(data)
  const allServices = []
  const stats = { service_count: 0 }
  directorates.forEach(directorate => {
    const _functions = getFunctions(directorate)
    _functions.forEach(_function => {
      const services = getAFunctionsServices(_function)
      const filteredServices = []
      services.forEach(service => {
        if (service.risk === risk) {
          stats.service_count += 1
          filteredServices.push(service)
        }
      })
      _function.services = filteredServices
    })
    allServices.push(directorate)
  })
  const newData = allServices
  newData.stats = stats
  return newData
}

module.exports = {
  getDirectorates,
  getFunctions,
  getAFunctionsServices,
  filterLiveServices,
  filterNotLiveServices,
  filterServicesByType,
  filterServicesByRisk,
  filterSunsettingServices
}
