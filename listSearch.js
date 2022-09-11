const puppeteer = require("puppeteer");
const fs = require("fs/promises");

const start = async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(
    "https://jobb.tu.no/jobb/oensker-du-aa-utvikle-neste-generasjons-etterretningsapplikasjoner/48861"
  );


  await browser.close();
};

start();
