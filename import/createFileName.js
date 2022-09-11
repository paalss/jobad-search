export const createFileName = async (heading) => {
  const fileName = heading
    .toLowerCase()
    .replaceAll(" ", "_")
    .replaceAll("æ", "ae")
    .replaceAll("ø", "oe")
    .replaceAll("å", "aa")
    .replaceAll("?", "");
  return fileName;
};
