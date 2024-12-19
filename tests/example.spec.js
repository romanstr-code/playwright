const {test,expect} = require('@playwright/test');

test("First Test @smoke", async ({page}) =>{
    //Write testing code
    await page.goto("https://playwright.dev");
    const title = page.locator('.navbar__inner .navbar__title');
    await expect(title).toHaveText('Playwright');
});

test("Simple click test @regression", async ({page, browserName}) =>{
    test.skip(browserName === 'firefox', 'Working on the firefox fix');
    await page.goto("https://the-internet.herokuapp.com");
    await page.locator("text=Add/Remove Elements").click();
    await page.pause();
    await page.locator("text=Add Element").click();
});


test("Duplicate Test @smoke", async ({page}) =>{
    await page.goto("https://the-internet.herokuapp.com");
    await page.click("text=Add/Remove Elements");
    await page.click("text=Add Element");
})

test("Duplicate Test1 @regression", async ({page}) =>{
    await page.goto("https://the-internet.herokuapp.com");
    await page.click("text=Add/Remove Elements");
    await page.click("text=Add Element");
})