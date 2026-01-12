import fs from "node:fs/promises";

async function readFile(path: string) {
  try {
    const jsonData = await fs.readFile(path, "utf-8");
    const data = JSON.parse(jsonData);

    return data;
  } catch (error) {
    console.error(`Cannot read file from: ${path}`, error);
  }
}

async function writeFile(path: string, data: any) {
  try {
    await fs.writeFile(path, JSON.stringify(data, null, 2));
  } catch (error) {
    console.error(`Cannot write file into: ${path}`, error);
  }
}

export { readFile, writeFile };
