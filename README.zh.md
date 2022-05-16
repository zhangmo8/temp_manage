
<p>
  <a href="https://github.com/wegi8/temp_manage/blob/main/README.md">English</a> | 
  <a href="https://github.com/wegi8/temp_manage/blob/main/README.zh.md">简体中文</a>
</p>

# temp_manage

[![NPM](https://nodei.co/npm/temp-manage.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/temp-manage/)

一个自用的模版管理工具。

暂时仅支持 `github`, `gitlab`, `Bitbucket`

欢迎大家在issue下推荐好用的项目模版，如果真的好用会内置到temp_manage的模版列表中

# 安装

```shell
npm i temp_manage -g
```

# 创建项目并选择模版

```shell
 tm create <projectName>
```

# 增加一个新模版

```shell
 tm add <templateName>
```

新增模版的repo规则请查看 [这里](https://www.npmjs.com/package/download-git-repo)

# 未来的工作

- [x] ~~支持自定义增加模版 `add <templateName>|<templateAddress>`~~
- [ ] 支持自定义删除模版 `remove | rm <templateName>`
- [ ] 支持设置`模版列表`地址 `tm set source=<url>`
