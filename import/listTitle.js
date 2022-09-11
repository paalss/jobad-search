export const listTitle = async (page) => {
  const heading = await page.$eval("h1", (e) => e.textContent);
  const textFileName = heading
    .toLowerCase()
    .replaceAll(" ", "_")
    .replaceAll("æ", "ae")
    .replaceAll("ø", "oe")
    .replaceAll("å", "aa")
    .replaceAll("?", "");
  return { textFileName, heading };
};
