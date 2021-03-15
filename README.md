# Accessibility Stats Generator

A tool for generating accessibility compliance reports in large departments.

## Getting started

First, you need a config file at the right location: `src/config.js`.  
You can change the name of `config-example.js` to make it work.

The tool uses data in the `src/data` folder.  
You can change the name of `src/data-example` to make it work.

The stats breakdown pattern is as follows:
- Overview - level 0
- Directorate - level 1
- Function - level 2
- Service - level 3

## Statistics explained

The statistics breakdown is as follows:
- The progress of a service feeds into the statistics for the function.
- The statistics of all of the functions feeds into the statistics for a directorate.
- The statistics of all the directorates feeds into the statistics for the overview.

For example:
The service data works off 5 pieces of information:
- WCAG 2.1 checks
- Screenreader tested
- Voice recognition tested
- Screen magnifier tested
- Accessibility statement

Each one of these will contribute 20% to the progress for that service. When the service is compliant, it will then contribute to the statistice of the levels above it.

The report will contain statistics for `true compliance` and `strategic compliance`.

True compliance is the real compliance rate. This includes all of the services which are in use and the rates are worked out by whether they have provided the correct evidence.

Strategic compliance is the adjusted rate. It includes all of the services which are in use, but unlike true compliance the rates wont take into account any services which are due to be decomissioned soon and aren't being worked on.

## Preview your report

You can start a server and preview the report by running the following command from the project folder:
```
npm start
```
Then you can view the report at the following URL:
```
http://localhost:3000
```

## Build your report

> _**NOTE: You can't build the report if you are still running the preview server.**_

Once you're happy with the report, you can build it into a static HTML bundle with the following command:
```
npm run build
```
This will output a new folder named `build` in the home directory which will contain `.html` files. The whole build folder can be zipped up and shared or individual pages can be shared. 

All files can work on their own as the CSS is part of the page and not referenced by links.
