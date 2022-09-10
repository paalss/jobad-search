const puppeteer = require("puppeteer");

const start = async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto("https:en.wikipedia.org/wiki/JavaScript");
  await page.screenshot({ path: "amazing.png", fullPage: true });
  await browser.close();
};

start();
