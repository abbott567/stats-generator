const { format } = require('date-fns')

module.exports = {
  org_name: 'Organisation name',
  date: format(new Date(), 'd MMMM yyyy'),
  contact_email: 'name@email.com'
}
