#!/usr/bin/env node
import fs from 'fs'
import inquirer from 'inquirer'
import ora from 'ora'
import { resolve } from 'path'
import download from 'download-git-repo'
import { readFile } from 'fs/promises';

const templateJson = JSON.parse(await readFile(new URL('./template.json', import.meta.url)));

const spinner = ora('Loading...');
const questions = [
  {
    type: 'input', // type为答题的类型 
    name: 'projectName', // 本题的key，待会获取answers时通过这个key获取value
    message: 'projectName：', // 提示语
    validate(val) {
      if (!val) { // 验证一下输入是否正确
        return '请输入文件名';
      }
      if (fs.existsSync(val)) { // 判断文件是否存在
        return '文件已存在';
      } else {
        return true;
      };
    }
  }, {
    type: 'list',
    name: 'repository',
    message: 'what\'s the template do you want?',
    choices: templateJson
  }
];

inquirer
  .prompt(questions)
  .then(answers => {
    // 获取答案
    const projectName = answers.projectName;
    const repository = answers.repository;

    spinner.color = 'green';
    console.log("\nprojectName", projectName);
    console.log("repository", repository);
    downloadTemplate({ repository, projectName });
  });


const downloadTemplate = function ({ repository, projectName }) {
  spinner.start();
  const CWD = process.cwd()
  const destination = resolve(CWD)
  download(repository, destination + '/' + projectName, (err) => {
    console.log(err ? `Download Error: ${err}` : 'Download Successful');
    if (err !== 'Error') {
      editFile({ projectName });
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
    console.log('Successfully!!!');
  });
};