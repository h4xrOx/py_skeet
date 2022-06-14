/**
 * @description 储存配置
 */
const { isProd } = require('../utils/env')
let REDIS_CONF = {
    port: 6379,
    host: '127.0.0.1',
    password: "j58ONGvIwvdATscXjhMR"
}
let MYSQL_CONF = {
    host: "127.0.0.1",
    user: 'root',
    password: '',
    port: 3306,
    database: "yzsheet",
    dialect: "mysql"
}
if (isProd) {
    let REDIS_CONF = {
        // 线上配置
        port: 6379,
        host: '127.0.0.1'
    }

    let MYSQL_CONF = {
        // 线上MySQL
        host: "172.24.153.170/login?redirect=%2Fdashboard",
        user: 'root',
        password: 'root',
        port: 3306,
        database: "yzsheet",
        dialect: "mysql"
    }
}
module.exports = {
    REDIS_CONF,
    MYSQL_CONF
}
