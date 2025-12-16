/**
 * Device Utilities
 * Common device-related helper functions
 */

/**
 * Get the current platform (Android or iOS)
 */
export const getPlatform = async (): Promise<string> => {
  const capabilities = driver.capabilities as any;
  return capabilities.platformName as string;
};

/**
 * Check if running on Android
 */
export const isAndroid = async (): Promise<boolean> => {
  const platform = await getPlatform();
  return platform.toLowerCase() === 'android';
};

/**
 * Check if running on iOS
 */
export const isIos = async (): Promise<boolean> => {
  const platform = await getPlatform();
  return platform.toLowerCase() === 'ios';
};

/**
 * Hide keyboard
 */
export const hideKeyboard = async (): Promise<void> => {
  try {
    await driver.hideKeyboard();
  } catch (error) {
    console.log('Keyboard already hidden or not visible');
  }
};

/**
 * Go back (Android back button or iOS back gesture)
 */
export const goBack = async (): Promise<void> => {
  if (await isAndroid()) {
    await driver.back();
  } else {
    // For iOS, you might need to use specific gesture or button
    await driver.back();
  }
};

/**
 * Pause execution
 * @param {number} ms - Milliseconds to pause
 */
export const pause = async (ms: number): Promise<void> => {
  await driver.pause(ms);
};
