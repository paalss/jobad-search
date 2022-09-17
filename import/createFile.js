import { createFileName } from "./createFileName.js";
import { searchText } from "./searchText.js";
import fs from "fs/promises";

export const createFile = async (page) => {
  const heading = await page.$eval("h1", (e) => e.textContent);
  const fileName = await createFileName(heading);

  const foundTerms = await searchText(page);

  const content = `# [${heading}](${link})

## Kvalifikasjoner
${foundTerms}`;

  await fs.writeFile(`files/${fileName}.md`, content);

  return "file has been written";
};
