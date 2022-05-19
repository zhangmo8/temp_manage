import { logger } from "../global.js";
import { getList, getTemplate_dir } from "./list.js";
import fs from 'fs'
import inquirer from 'inquirer'
import ora from 'ora'

const question = [{
  type: "confirm",
  message: "I hope you know what are you doing now",
  name: "ConfirmRemove",
  default: true
}]
const spinner = ora('Loading... \n');


export default async function removeTemplate(name) {
  const templateList = await getList();
  const i = templateList.findIndex((item) => item.name === name);
  if (i === -1) {
    logger.error(`Error: the ${name} is not find in you template list !!!`)
    return;
  }
  inquirer
    .prompt(question)
    .then(({ ConfirmRemove }) => {
      if (ConfirmRemove) {
        spinner.start();
        spinner.color = 'green';
        logger.warning(`\nprojectName: ${name}`);
        rewriteTheTemplateJson(name);
      }
    });
}

async function rewriteTheTemplateJson(name) {
  const template_dir = await getTemplate_dir()

  try {
    const data = fs.readFileSync(template_dir);
    let _data = JSON.parse(data.toString())
    const templateList = await getList();
    const i = templateList.findIndex((item) => item.name === name);
    _data.splice(i, 1)
    let str = JSON.stringify(_data, null, 2);
    // 写入文件
    fs.writeFile(template_dir, str, function (err) {
      if (err) throw err;
      spinner.succeed();
      logger.success(`Remove Success`);
    })
  } catch (error) {
    logger.error(`Remove Error: ${error}`);
  }
}