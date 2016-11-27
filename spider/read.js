const request = require('request');
const iconv = require('iconv-lite');
const cheerio = require('cheerio');

/**
 *
 * @param url 抓取的网页url
 * @param callback 回调函数 参数1 错误对象 参数2 读取对象数组
 * 步骤：
 * 1. 请求url地址 得到响应体转成utf8字符串 再用cheerio从中提取出对象数组
 */
module.exports = function (url, callback) {
    request({
        url: url,
        encoding: null
    }, function(error, response, body){
        body = iconv.decode(body, 'gbk');
        let $ = cheerio.load(body);
        let items = [];
        $('.keyword .list-title').each(function () {
            let $self = $(this);
            let item = {
                name: $self.text(),
                url: $self.attr('href')
            };
            items.push(item);
        });

        callback(error, items);
    });

};

