export const searchText = async (page) => {
  const pageContent = await page.content();
  const searchTerms = [
    /react/i,
    /html/i,
    /css/i,
    /sjakk/i,
    /potet/i,
    /verdensmesterskap/i,
  ];

  const foundTermsArr = searchTerms
    .map((REGEX) => {
      if (pageContent.match(REGEX)) {
        return REGEX.source;
      } else {
        return null;
      }
    })
    .filter((e) => e !== null);

  return foundTermsArr.join("\n- ")
};
