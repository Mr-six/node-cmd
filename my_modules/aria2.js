const shell = require('shelljs')

/**
 * aria2 启动命令
 * aria2 配置文件为 /Users/miaojiang/aria2.cof
 * 启动方式为 aria2c --conf-path='/Users/miaojiang/aria2.cof' -D
 * 关闭使用 kill aria2c 按tab 结束掉 进程pid
 */
const aria2_cmd = "aria2c --conf-path='/Users/miaojiang/aria2.cof' -D"
module.exports = {
  cmd: 'aria2',
  desc: '下载工具 aria2 服务启动',
  builder: function (yargs) {
    var argv = yargs.reset()

      .boolean('s')
      .alias('s', 'stop')
      .describe('s', '停止aria2服务')

      .usage('Usage: jyy aria2')
      .example('jyy aria2', '——> 开启本地aria2服务')
      .help("h")
      .alias("h", "help")
      .argv;
    if (argv.s) {
      console.log('关闭请使用 kill aria2c + tab')
    } else {
      shell.exec(aria2_cmd)
      console.log('关闭请使用 kill aria2c + tab')
    }      
  }
}
