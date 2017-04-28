const shell = require('shelljs')

// ngrok 目录
const ngrok_my_path = '/Users/miaojiang/web/ngrok/my' // vultr 日本 暂无
const ngrok_test_path = '/Users/miaojiang/web/ngrok/test' // 搬瓦工 洛杉矶
const sunny_path = '/Users/miaojiang/web/ngrok/sunny' // sunny 第三方个人服务 香港服务器 
const sunny_id = 'b2c5454ee361a1e8'   //对应端口为3000 的隧道id
const sunny_com = './sunny clientid ' + sunny_id
const ngrok_cmd = './ngrok -config=./ngrok.yml -subdomain='   // 配置文件

module.exports = {
  cmd: 'ngrok',
  desc: '启动ngrok 内网穿透服务',
  builder: function (yargs) {
    var argv = yargs.reset()
      .option("s", {
        alias: "subdomain",
        description: "子域名",
        default: 'sunny', // 默认值为sunny 使用第三方进行连接
        type: 'string'
      })
      .option("p", {
        alias: "port",
        description: "本地端口",
        default: 3000,
        type: 'number'
      })
      .usage('Usage: jyy agrok [options] [arguments]')
      .example('jyy agrok -s vue -p 8080', '——> ngrok 使用‘vue’子域名 本地端口‘8080’ \n \
        默认使用sunny 暴露本3000 端口')
      .help("h")
      .alias("h", "help")
      .argv;
    if (argv.s === 'sunny' && argv.p == 3000) {  // 如果
      shell.cd(sunny_path)
      shell.exec(sunny_com)
    } else{
      shell.cd(ngrok_test_path)
      shell.exec(ngrok_cmd + argv.s + ' ' + argv.p)
    }
  }
}
