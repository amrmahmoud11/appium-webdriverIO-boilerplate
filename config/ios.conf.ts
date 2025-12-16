import dotenv from 'dotenv';

dotenv.config();

export const config = {
  runner: 'local',
  port: parseInt(process.env.APPIUM_PORT || '4723'),
  specs: [
    '../dist/specs/*.spec.js'
  ],
  maxInstances: 1,
  capabilities: [
    {
      platformName: 'iOS',
      'appium:automationName': 'XCUITest',
      'appium:deviceName': process.env.DEVICE_NAME || 'iPhone 15',
      'appium:app': process.env.APP_PATH || '/path/to/your/app.app',
      'appium:newCommandTimeout': 240,
      'appium:connectHardwareKeyboard': true
    }
  ],
  framework: 'mocha',
  mochaOpts: {
    timeout: 60000
  },
  reporters: ['spec', 'allure'],
  baseUrl: `http://${process.env.APPIUM_HOST || 'localhost'}:${process.env.APPIUM_PORT || '4723'}`
};
