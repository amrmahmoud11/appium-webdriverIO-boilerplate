/**
 * Base Page Object
 * Contains common methods and properties for all page objects
 */
export default class BasePage {
  private timeout: number = 5000;

  /**
   * Wait for an element and get it
   * @param {string} selector - Element selector
   * @param {number} timeout - Custom timeout (optional)
   */
  async getElement(selector: string, timeout: number = this.timeout): Promise<WebdriverIO.Element> {
    const element = await $(selector);
    await element.waitForDisplayed({ timeout });
    return element;
  }

  /**
   * Get multiple elements
   * @param {string} selector - Elements selector
   */
  async getElements(selector: string): Promise<WebdriverIO.Element[]> {
    return await $$(selector);
  }

  /**
   * Click an element
   * @param {string} selector - Element selector
   */
  async click(selector: string): Promise<void> {
    const element = await this.getElement(selector);
    await element.click();
  }

  /**
   * Set value in an input field
   * @param {string} selector - Element selector
   * @param {string} value - Value to enter
   */
  async setValue(selector: string, value: string): Promise<void> {
    const element = await this.getElement(selector);
    await element.clearValue();
    await element.setValue(value);
  }

  /**
   * Get text from an element
   * @param {string} selector - Element selector
   */
  async getText(selector: string): Promise<string> {
    const element = await this.getElement(selector);
    return await element.getText();
  }

  /**
   * Check if element is displayed
   * @param {string} selector - Element selector
   */
  async isDisplayed(selector: string): Promise<boolean> {
    const element = await $(selector);
    return await element.isDisplayed();
  }

  /**
   * Wait for an element to be present
   * @param {string} selector - Element selector
   * @param {number} timeout - Custom timeout (optional)
   */
  async waitForElement(selector: string, timeout: number = this.timeout): Promise<void> {
    const element = await $(selector);
    await element.waitForExist({ timeout });
  }
}
