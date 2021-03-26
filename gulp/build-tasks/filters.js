const gulp = require('gulp')

gulp.task('build:filters', gulp.parallel([
  'build:filters:compliant-services-local',
  'build:filters:compliant-services-web',
  'build:filters:high-risk-services-local',
  'build:filters:high-risk-services-web',
  'build:filters:medium-risk-services-local',
  'build:filters:medium-risk-services-web',
  'build:filters:low-risk-services-local',
  'build:filters:low-risk-services-web',
  'build:filters:citizen-facing-services-local',
  'build:filters:citizen-facing-services-web',
  'build:filters:staff-facing-services-local',
  'build:filters:staff-facing-services-web',
  'build:filters:sunsetting-services-local',
  'build:filters:sunsetting-services-web',
  'build:filters:no-plans-for-compliance-local',
  'build:filters:no-plans-for-compliance-web'
]))
