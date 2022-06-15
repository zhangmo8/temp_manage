
<p>
  <a href="https://github.com/wegi8/temp_manage/blob/main/README.md">English</a> | 
  <a href="https://github.com/wegi8/temp_manage/blob/main/README.zh.md">简体中文</a>
</p>

# temp_manage

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
 tm <rm|remove> <templateName>
```

# Transfer or Edit template with JSON

```shell
 tm <open|explorer>
```

You can manipulate the template list by directly changing the template.json in the open folder, or you can copy it directly to another computer and migrate it.

# Future

- [x] ~~support the `add <templateName>|<templateAddress>`~~
- [x] ~~support the `remove | rm <templateName>`~~
- [ ] ~~set the source url that personal json `tm set source=<url>`~~(Because I didn't think about how to realize it more appropriately, I changed it to export form)
- [x] ~~Users can edit the template list directly to facilitate migration `tm open`~~
- [x] ~~This is specially prepared for myself. You can create `.tempc.json` under the folder to control the list of templates in this folder. For example, I have two folders, one of which is a company project. Here, I just need some templates for business components, and the other is my presentation folder. I'll put some blank templates in it. And the global template will work when I use GitHub development.~~
