import { resolve } from 'path'
import download from 'download-git-repo'
import inquirer from 'inquirer'
import ora from 'ora'
import { logger } from '../global.js';
import { getList } from './list.js';


const spinner = ora('Loading... \n');


const downloadTemplate = function ({ repository, projectName, clone = false }) {
  spinner.start();
  const CWD = process.cwd()
  const destination = resolve(CWD)
  download(repository, destination + '/' + projectName, { clone }, (err) => {
    if (err !== 'Error') {
      logger.success(`Download Success`);
      logger.info(`This tool only download. You should be change the template info by yourself`);
      spinner.succeed();
    } else {
      logger.error(`Download Error: ${err}`);
    }
  })
};

export default async function createProject(name, options = { }) {
  const templateJson = await getList()

  const questions = [
    {
      type: 'list',
      name: 'repository',
      message: 'what\'s the template do you want?',
      choices: templateJson
    }
  ];
  inquirer
    .prompt(questions)
    .then(answers => {
      const repository = answers.repository;
      spinner.color = 'green';
      logger.warning(`\nprojectName: ${name}`);
      logger.warning(`repository: ${repository}`);
      downloadTemplate({ repository, projectName: name, clone: options.c });
    });
}