const CronJob = require('cron').CronJob;

// 秒 分钟 小时 日期 月份  星期
let jon = new CronJob('1,2,10 * * * * *', function () {
    console.log(new Date().toLocaleDateString());
});
jon.start();