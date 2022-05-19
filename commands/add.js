import { logger } from "../global.js";
import inquirer from 'inquirer'
import ora from 'ora'
import fs from 'fs'
import { getList, getTemplate_dir } from "./list.js";

const questions = [
  {
    type: 'input',
    name: 'repository',
    message: 'You need to enter a compliant address  \n',
  }
];
const spinner = ora('Loading... \n');

export default async function addTemplate(name) {
  const templateList = await getList();
  const i = templateList.findIndex((item) => item.name === name);
  if (i !== -1) {
    logger.error(`Error: the ${name} is already in you template list !!!`)
    return
  }
  inquirer
    .prompt(questions)
    .then(answers => {
      spinner.start();
      const repository = answers.repository;
      spinner.color = 'green';
      logger.warning(`\nprojectName: ${name}`);
      logger.warning(`repository: ${repository}`);
      rewriteTheTemplateJson(name, repository);
    });
}

async function rewriteTheTemplateJson(name, repository) {
  const template_dir = await getTemplate_dir()
  try {
    const data = fs.readFileSync(template_dir);
    let _data = JSON.parse(data.toString())
    _data.push({ name, value: repository })
    let str = JSON.stringify(_data, null, 2);
    fs.writeFile(template_dir, str, function (err) {
      if (err) throw err;
      spinner.succeed();
      logger.success(`Add Success`);
    })
  } catch (error) {
    spinner.stopAndPersist();
    logger.error(`Add Error: ${error}`);
  }
}