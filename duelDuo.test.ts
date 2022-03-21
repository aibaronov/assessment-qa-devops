
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
    await driver.sleep(5000);
})

test('Wins are initialized to zero when the page loads', async () => {
    const winsAmount = await driver.findElement(By.id('wins')).getText();
    console.log(winsAmount);
    expect(winsAmount).toBe('Wins: 0')
    await driver.sleep(5000);
})

test('Draw button displays div with id="choices"', async ()=>{
    let drawBtn = await driver.findElement(By.id('draw'))
    await drawBtn.click();
    driver.sleep(5000);

    const choicesDiv = await driver.findElement(By.id('choices'));
    const displayedBoolean = await choicesDiv.isDisplayed();
    console.log(`Displayed results: ${displayedBoolean}`)

    expect(displayedBoolean).toBe(true);
    //let the driver wait before next test
    await driver.sleep(5000);
})


test("Clicking the 'Add to Duo' button displays the div with id = 'player-duo'", async () =>{
    let drawBtn = await driver.findElement(By.id('draw'))
    await drawBtn.click();
    driver.sleep(5000);

    let addDuoBtn = await driver.findElement(By.xpath('//button[contains(text(), "Add to Duo")][1]'));
    addDuoBtn.click();
    await driver.sleep(3000);

    let playerDuoDiv = await driver.findElement(By.id('player-duo'));
    let displayedBoolean = await playerDuoDiv.isDisplayed();
    expect(displayedBoolean).toBe(true);
})




test ("Make sure all bots appear when all bots button is clicked", async() => {
    let allBtn = await driver.findElement(By.id('see-all'));
    await allBtn.click();
    await driver.sleep(3000);
    //********/
    //This is how you select specific ID's and Classes from elements
    //with xpath
    let displayedBot = await driver.findElement(By.xpath('(//div[@id="all-bots"]/div[@class="bot-card outline"])[1]'))

    const displayed = await displayedBot.isDisplayed();
    expect(displayed).toBe(true);
    await driver.sleep(5000);

})

