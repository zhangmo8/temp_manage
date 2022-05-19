import { require, __dirname } from '../global.js'
import { resolve } from 'path'
import fs from 'fs'

export default async function viewList() {
  const templateJson = await getList();
  templateJson.forEach((item, i) => {
    console.log(`${i + 1}: ${item.name}`);
  });
}

export async function getList() {
  const temp_dir = await getTemplate_dir();
  const templateJson = require(temp_dir);
  return templateJson;
}

export function getTemplate_dir() {
  const CWD = process.cwd()
  const destination = resolve(CWD)
  return new Promise((proRes)=>{
    fs.readFile(destination +'/.tempc.json', (err) => {
      if (err) {
        return proRes(resolve(__dirname, './template.json'));
      }
      return proRes(destination + '/.tempc.json');
    })
  })
}