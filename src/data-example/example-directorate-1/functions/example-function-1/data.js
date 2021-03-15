module.exports = {
  name: 'Example function 1',
  alias: 'EF1',
  link: '/example-directorate-1/example-function-1',
  services: [
    require('./services/example-live-service'),
    require('./services/example-not-live-service')
  ]
}
