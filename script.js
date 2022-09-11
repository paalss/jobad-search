import puppeteer from "puppeteer";
import fs from "fs/promises";
import { createFileName } from "./import/createFileName.js";
import { searchText } from "./import/searchText.js";

const start = async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(
    "https://jobb.tu.no/jobb/oensker-du-aa-utvikle-neste-generasjons-etterretningsapplikasjoner/48861"
  );

  const heading = await page.$eval("h1", (e) => e.textContent);
  const fileName = await createFileName(heading);

  const foundTerms = await searchText(page);
  console.log(foundTerms);

  const content = `# ${heading}
      
## Kvalifikasjoner
- ${foundTerms}`;

  await fs.writeFile(`files/${fileName}.md`, content);
  await browser.close();
};

start();
