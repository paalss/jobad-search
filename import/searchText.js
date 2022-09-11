export const searchText = async (page) => {
  const pageContent = await page.content();
  const searchTerms = [
    /react/i,
    /html/i,
    /css/i,
    /angular/i,
    /javascript/i,
    /typescript/i,
    /php/i,
    /mysql/i,
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

  const listOfTerms = foundTermsArr.map((e) => {
    return (e = "- " + e);
  });

  return listOfTerms.join("\r\n");
};
