#!/usr/bin/env node
import fs from 'fs'
import inquirer from 'inquirer'
import ora from 'ora'

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
    choices: [
      { name: 'vue3+ts', value: "11" },
      { name: 'react+ts', value: "222" },
      { name: 'vue', value: "33" },
      { name: 'react', value: "44" },
    ]
  }
];

inquirer
  .prompt(questions)
  .then(answers => {
    spinner.start();
    // 获取答案
    const projectName = answers.projectName;
    const repository = answers.repository;

    spinner.color = 'green';
    console.log("\nprojectName", projectName);
    console.log("repository", repository);
    setTimeout(() => {
      spinner.stop();
      console.log('Successfully, Good lucky!');
    }, 1000);
    // downloadTemplate({ repository, version, projectName });
  });

const downloadTemplate = () => {

}