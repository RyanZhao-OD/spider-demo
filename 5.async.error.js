const async = require('async');


console.time('async');
function func1(callback){
    setTimeout(function () {
        // 第一个参数是错误对象 如果传了null 表示没有出错
        // 如果传了不为null的参数表示出错了 会直接调用终极回调 不会再继续执行任务了
        callback('error1', 'data1');
    }, 2000);
}
function func2(callback){
    setTimeout(function () {
        callback(null, 'data2');
    }, 3000);
}
// 串行 第一个数组中的异步函数会依次执行
async.series([
    func1,
    func2
], function (error, result) {
    // result的值和顺序与完成时间无关，与任务的排列顺序有关
    console.log(error);    // error1
    console.log(result);   // [ 'data1' ]
    console.timeEnd('async');  // async: 2008.023ms
});