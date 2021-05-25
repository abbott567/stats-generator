const gulp = require('gulp')

const Excel = require('exceljs')
const { format } = require('date-fns')
const date = format(new Date(), 'yyyy-MM-dd')
const filename = `${date}-excel-export.xlsx`

const { generateOverviewWorksheet } = require('./excel-overview')
const { generateDirectoratesWorksheet } = require('./excel-directorates')
const { generateFunctionsWorksheet } = require('./excel-functions')
const { generateServicesWorksheet } = require('./excel-services')

gulp.task('export:excel', async function (done) {
  const workbook = new Excel.Workbook()
  generateOverviewWorksheet(workbook)
  generateDirectoratesWorksheet(workbook)
  generateFunctionsWorksheet(workbook)
  generateServicesWorksheet(workbook)
  await workbook.xlsx.writeFile(`build/${filename}`)
})

gulp.task('export', gulp.series([
  'export:excel'
]))
