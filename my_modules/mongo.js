const shell = require('shelljs')

/**
 * mongo 容器工具 启动命令
 * 启动方式为 docker start mongo-server
 * 建立临时连接 docker run -it --link mongo-server:mongo --rm mongo sh -c 'exec mongo "$MONGO_PORT_27017_TCP_ADDR:$MONGO_PORT_27017_TCP_PORT/test"'
 * 关闭方式为 docker stop mongo-server
 */
const mongo_server_cmd = 'docker start mongo-server'
const mongo_connect_cmd = 'docker run -it --link mongo-server:mongo --rm mongo sh -c \'exec mongo "$MONGO_PORT_27017_TCP_ADDR:$MONGO_PORT_27017_TCP_PORT/test"\''
const mongo_stop_cmd = 'docker stop mongo-server'

module.exports = {
  cmd: 'mongo',
  desc: 'docker mongo 服务端',
  builder: function (yargs) {
    var argv = yargs.reset()
      .usage('Usage: jyy mongo [-s] [-c]')

      .boolean('s')
      .alias('s', 'stop')
      .describe('s', '停止mongo服务')

      .boolean('c')
      .alias('c', 'connect')
      .describe('c', '建立mongo连接')

      .example('jyy mongo -s', '——> 关闭本地mongo docker 服务')
      .help("h")
      .alias("h", "help")
      .argv;
    if (argv.s && argv.c) {
      console.log('参数错误')
    } else if (argv.s) {
      console.log('关闭本地mongo')
      shell.exec(mongo_stop_cmd)
    } else if (argv.c) {
      console.log('连接本地mongo (暂时无法使用，请使用手动输入) \n' + mongo_connect_cmd)
      // shell.exec(mongo_connect_cmd)  // 留待解决
    } else {
      console.log('开启本地mongo')
      shell.exec(mongo_server_cmd)
    }
  }
}
