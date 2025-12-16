import BasePage from './BasePage';

/**
 * Clock Page Object
 * Contains selectors and methods for the Google Clock app
 */
export default class ClockPage extends BasePage {
  constructor() {
    super();
  }

  // Selectors for Google Clock app
  private get addCityButton(): string {
    return '~Add city'; // accessibility id
  }

  /**
   * Click add city button
   */
  async clickAddCityButton(): Promise<void> {
    await this.click(this.addCityButton);
  }

  /**
   * Check if add city button is displayed
   */
  async isAddCityButtonDisplayed(): Promise<boolean> {
    return await this.isDisplayed(this.addCityButton);
  }
}
