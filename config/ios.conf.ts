export const config = {
  runner: 'local',
  port: 4723,
  specs: [
    'dist/specs/**/*.spec.js'
  ],
  maxInstances: 1,
  capabilities: [
    {
      platformName: 'iOS',
      'appium:automationName': 'XCUITest',
      'appium:deviceName': 'iPhone 15',
      'appium:app': '/path/to/your/app.app', // Update with your app path
      'appium:newCommandTimeout': 240,
      'appium:connectHardwareKeyboard': true
    }
  ],
  framework: 'mocha',
  mochaOpts: {
    timeout: 60000
  },
  reporters: ['spec'],
  baseUrl: 'http://localhost:4723'
};
