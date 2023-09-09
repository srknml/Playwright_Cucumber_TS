
var reporter = require('cucumber-html-reporter');

var options = {
    theme: 'bootstrap',
    jsonFile: 'target/cucumber_report.json',
    output: 'target/cucumber_report.html',
    reportSuiteAsScenarios: true,
    // storeScreenshots: true,
    // screenshotsDirectory: "target/screenshots/",
    scenarioTimestamp: true,
    launchReport: false,
    metadata: {
        "App Version": "0.3.2",
        "Test Environment": "STAGING",
        "Browser": "Chrome  54.0.2840.98",
        "Platform": "Windows 10",
        "Parallel": "Scenarios",
        "Executed": "Remote"
    },
    failedSummaryReport: true,
};

reporter.generate(options);