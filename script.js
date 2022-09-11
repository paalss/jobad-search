import puppeteer from "puppeteer";
import fs from "fs/promises";
import { listTitle } from "./import/listTitle.js";

const start = async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(
    "https://jobb.tu.no/jobb/oensker-du-aa-utvikle-neste-generasjons-etterretningsapplikasjoner/48861"
  );

  const result = await listTitle(page);
  console.log(result);

  const { textFileName, heading } = result;

  const content = `
    # ${heading}

    lorem ipsum
  `;

  await fs.writeFile(`titles/${textFileName}.md`, content);
  await browser.close();
};

start();
