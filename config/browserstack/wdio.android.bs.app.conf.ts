exports.config = {
    user: process.env.BROWSERSTACK_USERNAME || 'glaucovieira_A3xY1S',
    key: process.env.BROWSERSTACK_ACCESS_KEY || 'WwBRTwwzUqashT3srBEx',
    hostname: 'hub.browserstack.com',
    services: [
      [
        'browserstack',
        {
          app: 'bs://ad74f6ba445055d0d829daeb5cd648d74e80c342"',
          buildIdentifier: "${BUILD_NUMBER}",
          browserstackLocal: true,
          testObservability: true,
          percy: false,
          percyCaptureMode: 'auto'
        },
      ]
    ],
    capabilities: [{
      'bstack:options': {
        deviceName: 'Samsung Galaxy S22 Ultra',
        platformVersion: '12.0',
        platformName: 'android',
      }
    }, {
      'bstack:options': {
        deviceName: 'Google Pixel 7 Pro',
        platformVersion: '13.0',
        platformName: 'android',
      } }, {
      'bstack:options': {
        deviceName: 'OnePlus 9',
        platformVersion: '11.0',
        platformName: 'android',
      }
    }],
    commonCapabilities: {
      'bstack:options': {
        projectName: "BrowserStack Sample",
        buildName: "bstack-demo",
        debug: true,
        networkLogs: true
      }
    },
    maxInstances: 1,

};