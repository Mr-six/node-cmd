## 基于nodejs 的命令行diy脚本

参考：
- [Node.js 命令行程序开发教程 --阮一峰](http://www.ruanyifeng.com/blog/2015/05/command-line-with-node.html)
- [从零开始打造个人专属命令行工具集——yargs完全指南 --蓝猫](https://lanmaowz.com/a-complete-guide-to-yargs/)

##基本介绍

由于使用的几款软件启动时命令过长不容易记住，还有些要包含配置文件，以及配置参数每次启动都比较麻烦，索性就当练习这自己写了一个

主要实现功能如下

* [x] ngrok 命令 开启内网穿透
* [x] aria2 下载工具
* [x] mysql
* [x] redis
* [x] mongo
* [ ] proxy

命令行的proxy发现无效，留待之后解决，创建基于 docker 的数据库的临时连接时，报出the input device is not a TTY 留待解决。

Oh My Zsh 的插件功能应该也能实现同样的功能 暂时使用 alias 实现 proxy 发现方便的不行
```
# proxy
alias proxy='export http_proxy=http://127.0.0.1:1087 https_proxy=http://127.0.0.1:1087'  
alias disproxy='unset http_proxy https_proxy'
```

## 使用方法
在当前文件夹下运行 `npm link`

