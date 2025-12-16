export const config = {
  runner: 'local',
  port: 4723,
  specs: [
    '../dist/specs/*.spec.js'
  ],
  maxInstances: 1,
  capabilities: [
    {
      platformName: 'Android',
      'appium:automationName': 'UiAutomator2',
      'appium:deviceName': 'emulator-5554',
      'appium:appPackage': 'com.google.android.deskclock',
      'appium:appActivity': 'com.android.deskclock.DeskClock',
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
  baseUrl: 'http://localhost:4723'
};
