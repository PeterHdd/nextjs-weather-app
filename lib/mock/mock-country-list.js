import fsPromise from "fs/promises";
import path from "path";

export const getMockData = async (jsonString) => {
  const filePath = path.join(process.cwd(), `data/mock/${jsonString}.json`);
  const jsonData = await fsPromise.readFile(filePath);
  return JSON.parse(jsonData);
};
