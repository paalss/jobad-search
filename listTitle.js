
const puppeteer = require("puppeteer");
const fs = require("fs/promises");

const start = async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(
    "https://jobb.tu.no/jobb/oensker-du-aa-utvikle-neste-generasjons-etterretningsapplikasjoner/48861"
  );

  const heading = await page.$eval("h1", (e) => e.textContent);
  const textFileName = heading.toLowerCase().replaceAll(" ", "_").replaceAll("æ", "ae").replaceAll("ø", "oe").replaceAll("å", "aa").replaceAll("?", "")

  const content = `
    # ${heading}

    lorem ipsum
  `

  await fs.writeFile(`titles/${textFileName}.md`, content)

  await browser.close();
};

start();




 