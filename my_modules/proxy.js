const shell = require('shelljs')

/**
 * porxy 开启命令行工具代理（基于ssr http 1087端口）命令无效 暂转为zsh alias
 * 启动方式为 export http_proxy=http://127.0.0.1:1087 https_proxy=http://127.0.0.1:1087
 * 关闭代理 unset http_proxy https_proxy
 */
const porxy_cmd = 'export http_proxy=http://127.0.0.1:1087 https_proxy=http://127.0.0.1:1087'
const disproxy_cmd = 'unset http_proxy https_proxy'
module.exports = {
  cmd: 'porxy',
  desc: '开启命令行工具代理',
  builder: function (yargs) {
    var argv = yargs.reset()

      .boolean('s')
      .alias('s', 'stop')
      .describe('s', '停止porxy服务')

      .usage('Usage: jyy porxy')
      .example('jyy porxy', '——> 开启本地porxy服务')
      .help("h")
      .alias("h", "help")
      .argv;
    if (argv.s) {
      // shell.exec(disproxy_cmd) // 无效留待解决
      console.log(disproxy_cmd)
      console.log('关闭命令行代理')
    } else {
      // shell.exec(porxy_cmd) // 无效留待解决
      console.log(porxy_cmd)
      console.log('开启命令行代理')
    }      
  }
}
