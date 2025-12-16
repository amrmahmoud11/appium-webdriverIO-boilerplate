# Appium WebdriverIO Boilerplate (TypeScript)

A minimal boilerplate for mobile automation testing using **Appium + WebdriverIO** with **TypeScript**. Supports Android and iOS platforms.

## 📁 Project Structure

```
appium-webdriverIO-boilerplate/
├── config/
│   ├── android.conf.ts          # Android configuration
│   └── ios.conf.ts              # iOS configuration
├── src/
│   ├── pageObjects/
│   │   ├── BasePage.ts          # Base page with common methods
│   │   └── ClockPage.ts         # Page object example (Clock app)
│   ├── specs/
│   │   └── login.spec.ts        # Test cases
│   ├── types/
│   │   └── wdio.d.ts            # WebdriverIO types
│   └── utils/
│       └── deviceUtils.ts       # Device utilities
├── dist/                         # Compiled JavaScript (auto-generated)
├── tsconfig.json                 # TypeScript config
├── package.json
└── README.md
```

## 🛠️ Tech Stack

- **TypeScript 5.9** - Type-safe code
- **WebdriverIO 9.21** - Test automation framework
- **Appium 3.1** - Mobile automation server
- **Mocha** - Test runner
- **Node.js** - Runtime

## 📋 Prerequisites

1. **Node.js** v14+ - https://nodejs.org/
2. **Appium** - Mobile automation server
3. **Android SDK + Emulator** - For Android testing
4. **Platform Tools (ADB)** - For device communication

## 🚀 Quick Start

### 1. Install Dependencies

```bash
npm install
npm install -g appium
appium driver install uiautomator2  # Android driver
```

### 2. Build Project

```bash
npm run build
```

### 3. Start Appium

```bash
appium --allow-insecure=*:session_discovery
```

(The flag enables session discovery for Appium Inspector)

### 4. Run Tests

**Android:**
```bash
npm test
```

**iOS:**
```bash
npm run test:ios
```

## 📝 NPM Scripts

```bash
npm run build       # Compile TypeScript → JavaScript
npm run clean       # Remove dist/ folder
npm test            # Build & run Android tests
npm run test:ios    # Build & run iOS tests
```

## 🔍 Finding Element Selectors

### Using Appium Inspector

1. Run `npm test` in one terminal
2. Open Appium Inspector: https://github.com/appium/appium-inspector/releases
3. Connect to `localhost:4723`
4. Click elements to see their selectors
