var items = [
    {id: 1, name: 'od1'},
    {id: 2, name: 'od2'}
];
console.time('forEach');
let async = require('async');

/**
 * 迭代的数组
 * 迭代函数
 * 迭代完成后的回调函数
 */
async.forEach(items, function(item, cb){
    setTimeout(function () {
        console.log(item);
        cb();
    }, 1000);
}, function(error, result){
    console.log(arguments);
    console.timeEnd('forEach');
});