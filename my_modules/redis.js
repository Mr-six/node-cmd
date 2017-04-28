const shell = require('shelljs')

/**
 * redis 容器工具 启动命令
 * 启动方式为 docker start redis-server
 * 建立临时连接 docker run -it --link redis-server:redis --rm redis  redis-cli -h redis -p 6379
 * 关闭方式为 docker stop redis-server
 */
const redis_server_cmd = 'docker start redis-server'
const redis_connect_cmd = 'docker run -it --link redis-server:redis --rm redis  redis-cli -h redis -p 6379'
const redis_stop_cmd = 'docker stop redis-server'

module.exports = {
  cmd: 'redis',
  desc: 'docker redis 服务端',
  builder: function (yargs) {
    var argv = yargs.reset()
      .usage('Usage: jyy redis [-s] [-c]')

      .boolean('s')
      .alias('s', 'stop')
      .describe('s', '停止redis服务')

      .boolean('c')
      .alias('c', 'connect')
      .describe('c', '建立redis连接')

      .example('jyy redis -s', '——> 关闭本地redis docker 服务')
      .help("h")
      .alias("h", "help")
      .argv;
    if (argv.s && argv.c) {
      console.log('参数错误')
    } else if (argv.s) {
      console.log('关闭本地redis')
      shell.exec(redis_stop_cmd)
    } else if (argv.c) {
      console.log('连接本地redis (暂时无法使用，请使用手动输入) \n' + redis_connect_cmd)
      // shell.exec(redis_connect_cmd)  // 留待解决
    } else {
      console.log('开启本地redis')
      shell.exec(redis_server_cmd)
    }
  }
}
