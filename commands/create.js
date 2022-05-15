import { readFile } from 'fs/promises';
import { resolve } from 'path'
import download from 'download-git-repo'
import fs from 'fs'
import inquirer from 'inquirer'
import ora from 'ora'
import { logger } from '../global.js';

const templateJson = JSON.parse(await readFile(new URL('../template.json', import.meta.url)));

const spinner = ora('Loading... \n');

const questions = [
  {
    type: 'list',
    name: 'repository',
    message: 'what\'s the template do you want?',
    choices: templateJson
  }
];

const downloadTemplate = function ({ repository, projectName, clone = false }) {
  spinner.start();
  const CWD = process.cwd()
  const destination = resolve(CWD)
  download(repository, destination + '/' + projectName, { clone }, (err) => {
    if (err !== 'Error') {
      editFile({ projectName });
    } else {
      logger.error(`Download Error: ${err}`);
    }
  })
};

const editFile = function ({ projectName }) {
  // 读取文件
  fs.readFile(`${process.cwd()}/${projectName}/package.json`, (err, data) => {
    if (err) throw err;
    // 获取json数据并修改项目名称和版本号
    let _data = JSON.parse(data.toString())
    _data.name = projectName
    let str = JSON.stringify(_data, null, 4);
    // 写入文件
    fs.writeFile(`${process.cwd()}/${projectName}/package.json`, str, function (err) {
      if (err) throw err;
    })
    spinner.succeed();
    logger.success('Successfully!!!');
  });
};

export default function createProject(name, options = { }) {
  inquirer
    .prompt(questions)
    .then(answers => {
      // 获取答案
      const repository = answers.repository;

      spinner.color = 'green';
      logger.warning(`\nprojectName: ${name}`);
      logger.warning(`repository: ${repository}`);
      downloadTemplate({ repository, projectName: name, clone: options.c });
    });
}