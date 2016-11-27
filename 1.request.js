const fs = require('fs');
const request = require('request');
const iconv = require('iconv-lite');

request({
    url: 'http://top.baidu.com/buzz?b=7&c=10&fr=topcategory_c10',
    encoding: null
    }, function(error, response, body){
    if(error){
        console.log(error);
    } else {
        console.log(body);
        body = iconv.decode(body, 'gbk');

        fs.writeFile('./top.html', body, 'utf8', function(error){
            console.log('ok');
        });
    }
});