import { logger, __dirname } from "../global.js";
import { resolve } from 'path'
import inquirer from 'inquirer'
import ora from 'ora'
import fs from 'fs'

const questions = [
  {
    type: 'input',
    name: 'repository',
    message: 'You need to enter a compliant address  \n',
  }
];
const spinner = ora('Loading... \n');

export default function addTemplate(name) {
  inquirer
    .prompt(questions)
    .then(answers => {
      // 获取答案
      spinner.start();
      const repository = answers.repository;
      spinner.color = 'green';
      logger.warning(`\nprojectName: ${name}`);
      logger.warning(`repository: ${repository}`);
      rewriteTheTemplateJson(name, repository);
    });

}

function rewriteTheTemplateJson(name, repository) {
  const template_dir = resolve(__dirname, './template.json');
  fs.readFile(template_dir, (err, data) => {
    if (err) {
      logger.error(`Error: ${err}`);
      return;
    }
    // 获取json数据并修改项目名称和版本号
    let _data = JSON.parse(data.toString())
    _data.push({ name, value: repository })
    let str = JSON.stringify(_data, null, 4);
    // 写入文件
    fs.writeFile(template_dir, str, function (err) {
      if (err) throw err;
      spinner.succeed();
      logger.success(`Download Success`);
    })
  });
}