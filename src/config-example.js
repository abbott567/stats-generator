const { format } = require('date-fns')

module.exports = {
  org_name: 'Organisation name',
  org_repo: 'link to shared repo if needed',
  a11y_report_link: 'link to accessibility audit for statement',
  date: format(new Date(), 'd MMMM yyyy'),
  contact_email: 'name@email.com'
}
