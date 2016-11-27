const fs = require('fs');
const request = require('request');

request('https://www.baidu.com/', function(error, response, body){
    if(error){
        console.log(error);
    } else {
        fs.writeFile('./baidu.html', body, options, function(){
            
        });
    }
});