const reporter = require("cucumber-html-reporter");

const options = {
  theme: "bootstrap",
  jsonFile: "Cucumber_report.json",
  output: "reports/cucumber_report.html",
  reportSuiteAsScenario: true,
  scenarioTimestamp: true,
  launchReport: false,
  metadata: {
    "App Version": "2.0.0",
    "Test Environment": "STAGING",
    Browser: "Chrome 120.0",
    Platform: "Windows 11",
  },
};

reporter.generate(options);
