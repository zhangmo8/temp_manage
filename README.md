
<p>
  <a href="https://github.com/wegi8/temp_manage/blob/main/README.md">English</a> | 
  <a href="https://github.com/wegi8/temp_manage/blob/main/README.zh.md">简体中文</a>
</p>

# temp_manage

[![NPM](https://nodei.co/npm/temp-manage.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/temp-manage/)

A simple self-use pull template project.

Supports `github`, `gitlab`, `Bitbucket`

If you have an excellent template project, you can leave address in issue.

# Install

```shell
npm i temp-manage -g
```

# Create new project from template

```shell
 tm create <projectName>
```

# Add new template

```shell
 tm add <templateName>
```

The repo rules of the template can be viewed [here](https://www.npmjs.com/package/download-git-repo)

# Remove template

```shell
 tm remove <templateName>
```

or

```shell
 tm rm <templateName>
```

# Future

- [x] ~~support the `add <templateName>|<templateAddress>`~~
- [x] ~~support the `remove | rm <templateName>`~~
- [ ] ~~set the source url that personal json `tm set source=<url>`~~(Because I didn't think about how to realize it more appropriately, I changed it to export form)
- [ ] Users can edit the template list directly to facilitate migration `tm explorer`
