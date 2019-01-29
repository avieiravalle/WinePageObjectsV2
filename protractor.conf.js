var HtmlScreenshotReporter = require('protractor-jasmine2-screenshot-reporter');
var reporter = new HtmlScreenshotReporter({
    dest: 'Evidencias/screenshots',
    filename: 'my-report.html'
});

exports.config = {

    framework: 'jasmine',
    specs: ['./e2e/NewWine.js'],
    baseUrl: 'http://coenraets.org/',
    capabilities: {
        browserName: 'chrome',
        chromeOptions: {
            args: [/*"--headless",*/ "--window-size=800,600"]
        }
    },
    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 60000
    },
    beforeLaunch: function () {
        return new Promise(function (resolve) {
            reporter.beforeLaunch(resolve);
        });
    },
    onPrepare: function () {
        browser.ignoreSynchronization = true;
        browser.manage().window().maximize();
        jasmine.getEnv().addReporter(reporter);
    },
    afterLaunch: function (exitCode) {
        return new Promise(function (resolve) {
            reporter.afterLaunch(resolve.bind(this, exitCode));
        });
    },
    highlightDelay: 500,
}