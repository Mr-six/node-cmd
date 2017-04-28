const shell = require('shelljs')

/**
 * mysql 容器工具 启动命令
 * 启动方式为 docker start mysql-server
 * 建立临时连接 docker run -it --link mysql-server:mysql --rm mysql sh -c 'exec mysql -h "$MYSQL_PORT_3306_TCP_ADDR" -P"$MYSQL_PORT_3306_TCP_PORT" -uroot -p"$MYSQL_ENV_MYSQL_ROOT_PASSWORD"'
 * 关闭方式为 docker stop mysql-server
 */
const mysql_server_cmd = 'docker start mysql-server'
const mysql_connect_cmd = 'docker run -it --link mysql-server:mysql --rm mysql sh -c \'exec mysql -h "$MYSQL_PORT_3306_TCP_ADDR" -P"$MYSQL_PORT_3306_TCP_PORT" -uroot -p"$MYSQL_ENV_MYSQL_ROOT_PASSWORD"\''
const mysql_stop_cmd = 'docker stop mysql-server'

module.exports = {
  cmd: 'mysql',
  desc: 'docker mysql 服务端',
  builder: function (yargs) {
    var argv = yargs.reset()
      .usage('Usage: jyy mysql [-s] [-c]')

      .boolean('s')
      .alias('s', 'stop')
      .describe('s', '停止mysql服务')

      .boolean('c')
      .alias('c', 'connect')
      .describe('c', '建立mysql连接')

      .example('jyy mysql -s', '——> 关闭本地mysql docker 服务')
      .help("h")
      .alias("h", "help")
      .argv;
    if (argv.s && argv.c) {
      console.log('参数错误')
    } else if (argv.s) {
      console.log('关闭本地mysql')
      shell.exec(mysql_stop_cmd)
    } else if (argv.c) {
      console.log('连接本地mysql (暂时无法使用，请使用手动输入) \n' + mysql_connect_cmd)
      // shell.exec(mysql_connect_cmd // the input device is not a TTY 留待解决
    } else {
      console.log('开启本地mysql')
      shell.exec(mysql_server_cmd)
    }
  }
}
