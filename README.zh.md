
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
npm i temp-manage -g
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

# 删除模版

```shell
 tm <rm|remove> <templateName>
```

# 迁移 或者 直接更改模版列表的json文件

```shell
 tm <open|explorer>
```

您可以通过直接更改打开的文件夹中的template.json来操作模板列表，也可以将其直接复制到另一台计算机并进行迁移。

# 未来的工作

- [x] ~~支持自定义增加模版 `add <templateName>|<templateAddress>`~~
- [x] ~~支持自定义删除模版 `remove | rm <templateName>`~~
- [ ] ~~支持设置`模版列表`地址 `tm set source=<url>`~~（由于没想好怎样实现更为合适，固改为导出形式）
- [x] ~~支持用户直接编辑模版列表，方便迁移 `tm open`~~
- [x] ~~这是专门为我自己准备的。您可以在文件夹下创建`.tempc.json`来控制此文件夹中的模板列表。例如，我有两个文件夹，其中一个是公司项目。在这里，我只需要一些业务组件的模板，另一个是我的演示文件夹。我会在里面放一些空白模板。而全局的模版则会在我使用GitHub开发的时候起作用~~
