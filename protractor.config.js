exports.config = {
    sauceUser: 'seagull241',
    sauceKey: '84550375-1ae5-47f4-a122-046677e0b9c9',
    framework: 'jasmine',
    sauceSeleniumAddress: 'localhost:4445/wd/hub',
    specs: ['./integration/**/*.js'],

    onPrepare: function () {
        var caps = browser.getCapabilities();
    },

    multiCapabilities: [{
        browserName: 'firefox',
        version: '32',
        platform: 'OS X 10.10',
        name: 'firefox-tests',
        shardTestFiles: true,

        maxInstances: 25
    }, {
        browserName: 'chrome',
        version: '41',
        platform: 'Windows 7',
        name: 'chrome-tests',
        shardTestFiles: true,

        maxInstances: 25
    }],

    onComplete: function () {

        var printSessionId = function (jobName) {
            browser.getSession().then(function (session) {
                console.log('SauceOnDemandSessionID=' + session.getId() + ' job-name=' + jobName);
            });
        };
        printSessionId('Insert Job Name Here');
    }
};
