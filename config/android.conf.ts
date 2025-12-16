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
      platformName: 'Android',
      'appium:automationName': 'UiAutomator2',
      'appium:deviceName': process.env.DEVICE_NAME || 'emulator-5554',
      'appium:appPackage': process.env.APP_PACKAGE || 'com.google.android.deskclock',
      'appium:appActivity': process.env.APP_ACTIVITY || 'com.android.deskclock.DeskClock',
      'appium:newCommandTimeout': 240,
      'appium:connectHardwareKeyboard': true
    }
  ],
  framework: 'mocha',
  mochaOpts: {
    timeout: 60000
  },
  reporters: [
  'spec',
  'allure'
],
reporterOptions: {
  allure: {
    outputDir: 'allure-results',
    disableWebdriverStepsReporting: false,
    disableWebdriverScreenshotsReporting: false,
  }
},
  baseUrl: `http://${process.env.APPIUM_HOST || 'localhost'}:${process.env.APPIUM_PORT || '4723'}`
};
