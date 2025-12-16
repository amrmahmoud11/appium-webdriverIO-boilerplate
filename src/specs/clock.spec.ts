import ClockPage from '../pageObjects/ClockPage';
import { pause } from '../utils/deviceUtils';

describe('Clock App Tests', () => {
  let clockPage: ClockPage;

  beforeEach(async () => {
    clockPage = new ClockPage();
  });

  it('should display add city button', async () => {
    const isDisplayed = await clockPage.isAddCityButtonDisplayed();
    expect(isDisplayed).toBe(true);
  });

  it('should be able to click add city button', async () => {
    await clockPage.clickAddCityButton();
    // Button clicked successfully
    expect(true).toBe(true);
  });
});
