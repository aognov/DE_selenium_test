// Generated by Selenium IDE
const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')

describe('DE_test_selenium', function() {
  //this.timeout(30000)
  let driver
  let vars
  beforeEach(async function() {
    driver = await new Builder().forBrowser('chrome').build()
    vars = {}
  })
  afterEach(async function() {
    await driver.quit();
  })
  it('DE_test_selenium', async function() {
    await driver.get("http://localhost:3000/")
    await driver.manage().window().setRect({ width: 1030, height: 733 })
    await driver.findElement(By.linkText("Add")).click()
    await driver.findElement(By.id("title")).click()
    await driver.findElement(By.id("title")).sendKeys("AO")
    await driver.findElement(By.id("description")).click()
    await driver.findElement(By.id("description")).sendKeys("ao")
    await driver.findElement(By.css(".btn")).click()
  })
})
