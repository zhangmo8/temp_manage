import { logger, __dirname } from "../global.js";
import { getList } from "./list.js";
import { resolve } from 'path'
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


export default function removeTemplate(name) {
  const templateList = getList();
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

function rewriteTheTemplateJson(name) {
  const template_dir = resolve(__dirname, './template.json');
  fs.readFile(template_dir, (err, data) => {
    if (err) {
      logger.error(`Error: ${err}`);
      return;
    }
    // 获取json数据并修改项目名称和版本号
    let _data = JSON.parse(data.toString())
    const templateList = getList();
    const i = templateList.findIndex((item) => item.name === name);
    _data.splice(i, 1)
    let str = JSON.stringify(_data, null, 2);
    // 写入文件
    fs.writeFile(template_dir, str, function (err) {
      if (err) throw err;
      spinner.succeed();
      logger.success(`Remove Success`);
    })
  });
}