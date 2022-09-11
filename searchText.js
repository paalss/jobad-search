const puppeteer = require("puppeteer");
const fs = require("fs/promises");

const start = async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(
    "https://jobb.tu.no/jobb/oensker-du-aa-utvikle-neste-generasjons-etterretningsapplikasjoner/48861"
  );

  const pageContent = await page.content();
  // console.log(pageContent);

  const searchTerms = [
    /react/i,
    /html/i,
    /css/i,
    /sjakk/i,
    /potet/i,
    /verdensmesterskap/i,
  ];

  const found = searchTerms
    .map((REGEX) => {
      if (pageContent.match(REGEX)) {
        return REGEX.source;
      } else {
        return null;
      }
    })
    .filter((e) => e !== null);

  console.log(found);

  await browser.close();
};

start();
