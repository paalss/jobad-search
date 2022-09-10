const puppeteer = require("puppeteer");
const fs = require("fs/promises");

const start = async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto("https://learnwebcode.github.io/practice-requests");

  const names = await page.evaluate(() => {
    // client side js
    return Array.from(document.querySelectorAll(".info strong")).map(
      (x) => x.textContent
    );
  });

  await fs.writeFile("names.txt", names.join("\r\n"));

  await browser.close();
};

start();
