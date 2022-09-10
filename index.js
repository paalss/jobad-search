const puppeteer = require("puppeteer");
const fs = require("fs/promises");

const start = async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto("https://learnwebcode.github.io/practice-requests");

  const names = await page.evaluate(() => {
    // evaluate er generic for generell, catch all, client side js
    // console log vil logge til chrome console
    return Array.from(document.querySelectorAll(".info strong")).map(
      (x) => x.textContent
    );
  });

  await fs.writeFile("names.txt", names.join("\r\n"));

  await page.click("#clickme");
  const clickedData = await page.$eval("#data", (el) => el.textContent);
  console.log(clickedData)

  const photos = await page.$$eval("img", (imgs) => {
    // imgs er array av html elements
    return imgs.map((x) => x.src);
  });

  for (const photo of photos) {
    const imagepage = await page.goto(photo);
    await fs.writeFile(photo.split("/").pop(), await imagepage.buffer());
  }

  await browser.close();
};

start();
