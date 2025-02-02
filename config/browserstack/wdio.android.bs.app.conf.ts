<<<<<<< HEAD
import { config as baseConfig } from '../wdio.shared.conf.js';
=======
exports.config = {
      // ============
    // Specs
    // ============
    specs: [
        '../tests/specs/**/app*.spec.js',
    ],
    exclude: [
        // Exclude this one because the test can only be executed on emulators/simulators
        '../tests/specs/**/app.biometric.login.spec.js',
    ],
    
    user: process.env.BROWSERSTACK_USERNAME || 'glaucovieira_A3xY1S',
    key: process.env.BROWSERSTACK_ACCESS_KEY || 'WwBRTwwzUqashT3srBEx',
    hostname: 'hub.browserstack.com',
    services: [
      [
        'browserstack',
        {
          app: 'bs://ad74f6ba445055d0d829daeb5cd648d74e80c342',
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
>>>>>>> 4b9077b30418eb5fb8b13647ae4b1f00e8660284

export const config: WebdriverIO.Config = {
    ...baseConfig,
    // ============
    // Specs
    // ============
    specs: [
        '../tests/specs/**/app*.spec.js',
    ],
    exclude: [
        // Exclude this one because the test can only be executed on emulators/simulators
        '../tests/specs/**/app.biometric.login.spec.js',
    ],

    // =============================
    // Browserstack specific config
    // =============================
    // User configuration
    user: process.env.BROWSERSTACK_USER || 'glaucovieira_A3xY1S',
    key: process.env.BROWSERSTACK_ACCESS_KEY || 'WwBRTwwzUqashT3srBEx',
    // Use browserstack service
    services: ['browserstack'],

    // ============
    // Capabilities
    // ============
    // For all capabilities please check
    // http://appium.io/docs/en/writing-running-appium/caps/#general-capabilities
    capabilities: [
        {
            // Set URL of the application under test
            'appium:app': process.env.BROWSERSTACK_APP_ID || 'bs://ad74f6ba445055d0d829daeb5cd648d74e80c342',

            'bstack:options': {
                // Set your BrowserStack config
                debug: true,

                // Specify device and os_version for testing

                deviceName: 'Samsung Galaxy S22 Ultra',
                platformVersion: '12.0',
                platformName: 'android',


                // Set other BrowserStack capabilities
                projectName: 'wdio-test-project',
                buildName: 'android',
                sessionName: 'wdio-test'
            }
        },
    ] as WebdriverIO.Capabilities[]
};
