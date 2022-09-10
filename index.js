const puppeteer = require("puppeteer");
const fs = require('fs/promises')

const start = async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto("https://learnwebcode.github.io/practice-requests");
  
  const names = ['red', 'orange', 'yellow'];
  await fs.writeFile("names.txt", names.join("\r\n"))

  await browser.close();
};

start();
