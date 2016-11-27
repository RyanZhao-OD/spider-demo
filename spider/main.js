const read = require('./read');
const save = require('./save');
const async = require('async');
const CronJob = require('cron').CronJob;

let url = 'http://top.baidu.com/buzz?b=7&c=10&fr=topcategory_c10';
let novels = null;
async.series([
    function(cb){
        read(url, function(error, items){
            novels = items;
            cb();
        });
    },
    function(cb){
        save(novels, cb);
    }
], function(error, result){
    console.log(result);
});

// 秒 分钟 小时 日期 月份  星期
// let jon = new CronJob('*/30 * * * * *', function () {
//     console.log(new Date().toLocaleDateString());
// });
// jon.start();