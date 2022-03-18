
import { Builder, Capabilities, By } from "selenium-webdriver"
import { titleContains } from "selenium-webdriver/lib/until"

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    driver.get('http://localhost:3000/')
})

afterAll(async () => {
    driver.quit()
})

test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.id('title'))
    const displayed = await title.isDisplayed()
    expect(displayed).toBe(true)
})

test('Wins are initialized to zero when the page loads', async () => {
    const winsAmount = await driver.findElement(By.id('wins')).getText();
    console.log(winsAmount);
    expect(winsAmount).toBe('Wins: 0')
})

test('Draw button displays div with id="choices"', async ()=>{
    await driver.findElement(By.id('draw')).click();
    driver.sleep(5000);

    const findDiv = await driver.findElement(By.id('choices'));
    const displayed = await findDiv.isDisplayed();
    console.log(`Displayed results: ${displayed}`)

    expect(displayed).toBe(true);
})

