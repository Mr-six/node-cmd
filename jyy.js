#! /usr/bin/env node

/**
* 我的命令行工具 
* 1. ngrok 命令 开启内网穿透
* 2. aria2 下载工具
* 3. mysql
* 4. redis
* 5. mongo
*/

const argv = require('yargs')

const ngrok = require('./my_modules/ngrok')   // 内网穿透模块
const aria2 = require('./my_modules/aria2') // aria2c模块
const mysql = require('./my_modules/mysql') // mysql模块
const redis = require('./my_modules/redis') // redis模块
const mongo = require('./my_modules/mongo') // mongo模块

argv
  // .command(ngrok)

  // .command(aria2)

  // .command(mysql)

  // .command(redis)

  // .command(mongo)

  .commandDir('my_modules')   //统一导入文件夹下的命令

  .usage('Usage: jyy [options] [options] [arguments]')
  .example('jyy agrok -s vue -p 8080', '——> ngrok 使用‘vue’子域名 本地端口‘8080’')
  .help('h')
  .alias('h', 'help')
  .epilog('auth mrsix')
.argv
