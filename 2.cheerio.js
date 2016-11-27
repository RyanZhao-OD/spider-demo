const cheerio = require('cheerio');

let html = `<td class="keyword">
                <a class="list-title" target="_blank" href="http://www.baidu.com/baidu?cl=3&tn=SE_baiduhomet8_jmjb7mjw&fr=top1000&wd=%BD%F5%D0%E5%CE%B4%D1%EB" href_top="./detail?b=7&c=10&w=%BD%F5%D0%E5%CE%B4%D1%EB">锦绣未央</a>
            </td>
            <td class="keyword">
                <a class="list-title" target="_blank" href="http://www.baidu.com/baidu?cl=3&tn=SE_baiduhomet8_jmjb7mjw&fr=top1000&wd=%B4%F3%D6%F7%D4%D7" href_top="./detail?b=7&c=10&w=%B4%F3%D6%F7%D4%D7">大主宰</a>						                            <a href="./detail?b=7&c=10&w=%B4%F3%D6%F7%D4%D7" class="icon-search icon-xiang-imp" target="_blank">search</a>
            </td>`;


var $ = cheerio.load(html);
var items = [];
$('.keyword .list-title').each(function(){
    let $self = $(this);
    let item = {
        name: $self.text(),
        url: $self.attr('href')
    };
    items.push(item);
});

console.log(items);